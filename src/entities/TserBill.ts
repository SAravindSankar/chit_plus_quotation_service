import { Column, Entity } from "typeorm";

@Entity("TSER_BILL")
export class TserBill {
  @Column("number", { name: "BILLPK", nullable: true, precision: 10, scale: 0 })
  billpk: number | null;

  @Column("number", { name: "CTRFK", nullable: true, precision: 10, scale: 0 })
  ctrfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "BILL_NO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  billNo: number | null;

  @Column("date", { name: "BILL_DATE", nullable: true })
  billDate: Date | null;

  @Column("varchar2", { name: "BILL_TYPE", nullable: true, length: 1 })
  billType: string | null;

  @Column("varchar2", { name: "SPARELABOUR", nullable: true, length: 1 })
  sparelabour: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 10, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "JCFK", nullable: true, precision: 10, scale: 0 })
  jcfk: number | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

  @Column("number", {
    name: "OTH_ADD",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  netAmt: number | null;

  @Column("number", {
    name: "CASH_RECD",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  cashRecd: number | null;

  @Column("number", {
    name: "OTH_MODE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othMode: number | null;

  @Column("number", {
    name: "RECD_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  recdAmt: number | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  advAmt: number | null;

  @Column("number", {
    name: "CRN_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  crnAmt: number | null;

  @Column("varchar2", { name: "BILL_ST", nullable: true, length: 1 })
  billSt: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("varchar2", { name: "CASH_CREDIT", nullable: true, length: 50 })
  cashCredit: string | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 10, scale: 0 })
  staxfk: number | null;

  @Column("number", {
    name: "TSER_BILLPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tserBillpk: number | null;

  @Column("varchar2", { name: "CTR_NO", nullable: true, length: 2 })
  ctrNo: string | null;

  @Column("number", {
    name: "SPARES_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  sparesValue: number | null;

  @Column("number", {
    name: "SALES_TAX",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  salesTax: number | null;

  @Column("number", {
    name: "LABOUR_CHARGES",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  labourCharges: number | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;
}
