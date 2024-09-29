import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCustomer } from "./MasCustomer";
import { JmasGsstk } from "./JmasGsstk";
import { JsalCrnDet1 } from "./JsalCrnDet1";
import { JsalCrnDet2 } from "./JsalCrnDet2";

@Index("CRNPK", ["crnpk"], { unique: true })
@Entity("JSAL_CRN")
export class JsalCrn {
  @Column("number", { primary: true, name: "CRNPK", precision: 8, scale: 0 })
  crnpk: number;

  @Column("number", { name: "CRN_NO", nullable: true, precision: 5, scale: 0 })
  crnNo: number | null;

  @Column("date", { name: "CRN_DATE", nullable: true })
  crnDate: Date | null;

  @Column("char", { name: "CRN_TYPE", nullable: true, length: 1 })
  crnType: string | null;

  @Column("varchar2", { name: "CRN_TIME", nullable: true, length: 5 })
  crnTime: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("varchar2", { name: "CRN_ST", nullable: true, length: 1 })
  crnSt: string | null;

  @Column("number", {
    name: "CRN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crnAmt: number | null;

  @Column("number", {
    name: "OTH_ADD",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_DED",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othDed: number | null;

  @Column("number", {
    name: "CRN_NET",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crnNet: number | null;

  @Column("number", {
    name: "PAID_CASH",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidCash: number | null;

  @Column("number", {
    name: "OTH_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othAmt: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 4, scale: 0 })
  staxfk: number | null;

  @Column("number", {
    name: "ROUND_AMT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  roundAmt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "ADJ_DOCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  adjDocfk: number | null;

  @Column("number", {
    name: "ADJ_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjTranDocfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCustomer, (masCustomer) => masCustomer.jsalCrns)
  @JoinColumn([{ name: "CUSTFK", referencedColumnName: "custpk" }])
  custfk: MasCustomer;

  @ManyToOne(() => JmasGsstk, (jmasGsstk) => jmasGsstk.jsalCrns)
  @JoinColumn([{ name: "GSSTKFK", referencedColumnName: "gsstkpk" }])
  gsstkfk: JmasGsstk;

  @OneToMany(() => JsalCrnDet1, (jsalCrnDet1) => jsalCrnDet1.crnfk)
  jsalCrnDets: JsalCrnDet1[];

  @OneToMany(() => JsalCrnDet2, (jsalCrnDet2) => jsalCrnDet2.crnfk)
  jsalCrnDets2: JsalCrnDet2[];
}
