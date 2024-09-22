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
import { PaySlipDet } from "./PaySlipDet";

@Index("PAY_SLIPPK", ["paySlippk"], { unique: true })
@Entity("PAY_SLIP")
export class PaySlip {
  @Column("number", {
    primary: true,
    name: "PAY_SLIPPK",
    precision: 8,
    scale: 0,
  })
  paySlippk: number;

  @Column("char", { name: "MONTHYEAR", length: 8 })
  monthyear: string;

  @Column("number", { name: "DAYS_WKG", precision: 4, scale: 1 })
  daysWkg: number;

  @Column("number", { name: "DAYS_WKD", precision: 4, scale: 1 })
  daysWkd: number;

  @Column("number", {
    name: "DAYS_LEAVE",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysLeave: number | null;

  @Column("number", {
    name: "DAYS_LOP",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysLop: number | null;

  @Column("number", {
    name: "TOT_EARN",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totEarn: number | null;

  @Column("number", {
    name: "TOT_DED",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totDed: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  netAmt: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BASIC", nullable: true, precision: 10, scale: 2 })
  basic: number | null;

  @Column("char", { name: "SALTRAN_ST", nullable: true, length: 1 })
  saltranSt: string | null;

  @Column("number", { name: "PAY_FK", nullable: true, precision: 8, scale: 0 })
  payFk: number | null;

  @Column("number", {
    name: "DAYS_EXTRA_WKD",
    nullable: true,
    precision: 3,
    scale: 1,
  })
  daysExtraWkd: number | null;

  @Column("number", {
    name: "EXTRA_WAGE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  extraWage: number | null;

  @Column("number", {
    name: "SAL_PERIODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salPeriodfk: number | null;

  @Column("number", {
    name: "DAYS_EXTRA",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysExtra: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.paySlips)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.paySlips)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @OneToMany(() => PaySlipDet, (paySlipDet) => paySlipDet.paySlipfk)
  paySlipDets: PaySlipDet[];
}
