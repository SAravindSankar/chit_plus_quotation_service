import { Column, Entity } from "typeorm";

@Entity("TDAY_ACC_RATECUT")
export class TdayAccRatecut {
  @Column("number", {
    name: "RATE_CUTPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  rateCutpk: number | null;

  @Column("number", {
    name: "RATE_CUT_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  rateCutNo: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("date", { name: "RATE_CUT_DATE", nullable: true })
  rateCutDate: Date | null;

  @Column("char", { name: "DOC_IND", nullable: true, length: 1 })
  docInd: string | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "FOR_PARTYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  forPartyfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 8, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "CONV_FACTOR",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  convFactor: number | null;

  @Column("number", {
    name: "STOCK_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stockQty: number | null;

  @Column("number", {
    name: "STOCK_UOMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  stockUomfk: number | null;

  @Column("number", {
    name: "STOCK_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  stockRate: number | null;

  @Column("number", {
    name: "STOCK_PURITY",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  stockPurity: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  stdPurity: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "RATECUT_ST", nullable: true, length: 1 })
  ratecutSt: string | null;

  @Column("char", { name: "FOR_REC", nullable: true, length: 1 })
  forRec: string | null;

  @Column("char", { name: "REC_PAY", nullable: true, length: 1 })
  recPay: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
