import { Column, Entity } from "typeorm";

@Entity("TDAY_PUR")
export class TdayPur {
  @Column("number", { name: "PURPK", nullable: true, precision: 8, scale: 0 })
  purpk: number | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

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

  @Column("char", { name: "SELECTED", nullable: true, length: 1 })
  selected: string | null;

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

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("char", { name: "WT_AMT", nullable: true, length: 1 })
  wtAmt: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 6, scale: 0 })
  docfk: number | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("char", { name: "JPUR_TYPE", nullable: true, length: 1 })
  jpurType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "SECTED", nullable: true, length: 1 })
  sected: string | null;

  @Column("number", {
    name: "IN_CHAFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  inChafk: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;
}
