import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL")
export class TdayBill {
  @Column("number", {
    name: "SAL_BILLPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillpk: number | null;

  @Column("number", { name: "BILL_NO", nullable: true, precision: 8, scale: 0 })
  billNo: number | null;

  @Column("date", { name: "BILL_DATE", nullable: true })
  billDate: Date | null;

  @Column("char", { name: "FOR_BILL", nullable: true, length: 2 })
  forBill: string | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 6, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "PROD_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  prodValue: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  netAmt: number | null;

  @Column("varchar2", { name: "DISC_AUTHO", nullable: true, length: 25 })
  discAutho: string | null;

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

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "CASH_RECD",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  cashRecd: number | null;

  @Column("number", {
    name: "OTH_MODE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othMode: number | null;

  @Column("char", { name: "BILL_ST", nullable: true, length: 1 })
  billSt: string | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 8, scale: 0 })
  staxfk: number | null;

  @Column("char", { name: "BILL_TYPE", nullable: true, length: 1 })
  billType: string | null;

  @Column("char", { name: "TAX_TYPE", nullable: true, length: 1 })
  taxType: string | null;

  @Column("number", {
    name: "CRN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crnAmt: number | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  advAmt: number | null;

  @Column("number", {
    name: "RECD_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  recdAmt: number | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("char", { name: "SELECTED", nullable: true, length: 1 })
  selected: string | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("number", {
    name: "ROUND_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  roundAmt: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "TO_PAY", nullable: true, precision: 8, scale: 2 })
  toPay: number | null;

  @Column("char", { name: "OR_IND", nullable: true, length: 1 })
  orInd: string | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("char", { name: "JSAL_TYPE", nullable: true, length: 1 })
  jsalType: string | null;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 8, scale: 0 })
  schFk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "TEMP", nullable: true, precision: 12, scale: 2 })
  temp: number | null;
}
