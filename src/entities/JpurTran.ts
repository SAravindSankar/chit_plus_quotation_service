import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JpurDet1 } from "./JpurDet1";
import { JpurDet2 } from "./JpurDet2";
import { MasBranch } from "./MasBranch";
import { JmasGsstk } from "./JmasGsstk";
import { MasDoc } from "./MasDoc";

@Index("GETPUR", ["purNo", "vendorfk", "tranyear"], {})
@Index(
  "GETPUR1",
  ["purNo", "purDate", "vendorfk", "delflag", "branchfk", "tranyear"],
  {}
)
@Index("PURPK", ["purpk"], { unique: true })
@Entity("JPUR_TRAN")
export class JpurTran {
  @Column("number", { primary: true, name: "PURPK", precision: 8, scale: 0 })
  purpk: number;

  @Column("char", { name: "PUR_EXCH", nullable: true, length: 2 })
  purExch: string | null;

  @Column("number", { name: "PUR_NO", nullable: true, precision: 6, scale: 0 })
  purNo: number | null;

  @Column("date", { name: "PUR_DATE", nullable: true })
  purDate: Date | null;

  @Column("number", {
    name: "PUR_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  purAmt: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("varchar2", { name: "INV_NO", nullable: true, length: 20 })
  invNo: string | null;

  @Column("date", { name: "INV_DATE", nullable: true })
  invDate: Date | null;

  @Column("varchar2", { name: "DC_NO", nullable: true, length: 20 })
  dcNo: string | null;

  @Column("date", { name: "DC_DATE", nullable: true })
  dcDate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("char", { name: "PUR_ST", nullable: true, length: 1 })
  purSt: string | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  advAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 5, scale: 0 })
  docNo: number | null;

  @Column("date", { name: "DOC_DATE", nullable: true })
  docDate: Date | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 8, scale: 0 })
  staxfk: number | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "DBN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  dbnAmt: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "PUR_NET",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  purNet: number | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("char", { name: "WT_AMT", nullable: true, length: 1 })
  wtAmt: string | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", {
    name: "CASH_PAID",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  cashPaid: number | null;

  @Column("number", {
    name: "OTH_MODE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othMode: number | null;

  @Column("char", {
    name: "JPUR_TYPE",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  jpurType: string | null;

  @Column("number", { name: "KARAT", nullable: true, precision: 8, scale: 3 })
  karat: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "LESS_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  lessAmt: number | null;

  @Column("number", {
    name: "IN_CHAFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  inChafk: number | null;

  @Column("char", { name: "SECTED", nullable: true, length: 1 })
  sected: string | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @OneToMany(() => JpurDet1, (jpurDet1) => jpurDet1.purfk)
  jpurDets: JpurDet1[];

  @OneToMany(() => JpurDet2, (jpurDet2) => jpurDet2.purfk)
  jpurDets2: JpurDet2[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jpurTrans)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @ManyToOne(() => JmasGsstk, (jmasGsstk) => jmasGsstk.jpurTrans)
  @JoinColumn([{ name: "GSSTKFK", referencedColumnName: "gsstkpk" }])
  gsstkfk: JmasGsstk;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.jpurTrans)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
