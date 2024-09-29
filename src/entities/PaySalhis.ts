import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { MasEmp } from "./MasEmp";
import { PaySalhisDet } from "./PaySalhisDet";

@Index("SYS_C008289", ["paySalhispk"], { unique: true })
@Entity("PAY_SALHIS")
export class PaySalhis {
  @Column("number", {
    primary: true,
    name: "PAY_SALHISPK",
    precision: 8,
    scale: 0,
  })
  paySalhispk: number;

  @Column("number", {
    name: "PREV_SALHISFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  prevSalhisfk: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("char", { name: "SALREV_ST", nullable: true, length: 1 })
  salrevSt: string | null;

  @Column("char", { name: "EFF_DATE", nullable: true, length: 8 })
  effDate: string | null;

  @Column("varchar2", { name: "APPROVED_DESIGN", nullable: true, length: 20 })
  approvedDesign: string | null;

  @Column("date", { name: "APPROVED_DATE", nullable: true })
  approvedDate: Date | null;

  @Column("varchar2", { name: "APPROVED_BY", nullable: true, length: 30 })
  approvedBy: string | null;

  @Column("varchar2", { name: "REF_ID", nullable: true, length: 15 })
  refId: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.paySalhis)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.paySalhis)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @OneToMany(() => PaySalhisDet, (paySalhisDet) => paySalhisDet.paySalhisfk)
  paySalhisDets: PaySalhisDet[];
}
