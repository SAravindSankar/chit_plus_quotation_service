import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { PayLoanTran } from "./PayLoanTran";

@Index("LOANTYPE", ["delflag", "companyfk", "loantype"], { unique: true })
@Index("LOANTYPEPK", ["loantypepk"], { unique: true })
@Entity("MAS_LOANTYPE")
export class MasLoantype {
  @Column("number", { name: "LOANTYPEPK", precision: 4, scale: 0 })
  loantypepk: number;

  @Column("varchar2", { primary: true, name: "LOANTYPE", length: 15 })
  loantype: string;

  @Column("number", { name: "INT_PER", nullable: true, precision: 6, scale: 2 })
  intPer: number | null;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    precision: 4,
    scale: 0,
  })
  companyfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masLoantypes)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @OneToMany(() => PayLoanTran, (payLoanTran) => payLoanTran.loantypefk)
  payLoanTrans: PayLoanTran[];
}
