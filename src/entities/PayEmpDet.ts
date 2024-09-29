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
import { PayEmpDet1 } from "./PayEmpDet1";

@Index("PAY_EMP_DET", ["payEmpDetpk"], { unique: true })
@Entity("PAY_EMP_DET")
export class PayEmpDet {
  @Column("number", {
    primary: true,
    name: "PAY_EMP_DETPK",
    precision: 8,
    scale: 0,
  })
  payEmpDetpk: number;

  @Column("number", { name: "BASIC", precision: 10, scale: 2 })
  basic: number;

  @Column("number", { name: "GROSS_AMT", precision: 10, scale: 2 })
  grossAmt: number;

  @Column("number", { name: "NET_AMT", precision: 10, scale: 2 })
  netAmt: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "PAY_SALHISFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  paySalhisfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.payEmpDets)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.payEmpDets)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @OneToMany(() => PayEmpDet1, (payEmpDet1) => payEmpDet1.payEmpDetfk)
  payEmpDets: PayEmpDet1[];
}
