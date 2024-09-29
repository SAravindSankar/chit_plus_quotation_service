import "reflect-metadata";
import { Column, Entity } from "typeorm";

@Entity("TGR_DC")
export class TgrDc {
  @Column("number", {
    name: "TGR_DCPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcpk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "DC_NO", nullable: true, precision: 10, scale: 0 })
  dcNo: number | null;

  @Column("date", { name: "DC_DATE", nullable: true })
  dcDate: Date | null;

  @Column("varchar2", { name: "DC_TYPE", nullable: true, length: 1 })
  dcType: string | null;

  @Column("varchar2", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("varchar2", { name: "VEN_DC_NO", nullable: true, length: 20 })
  venDcNo: string | null;

  @Column("date", { name: "VEN_DC_DATE", nullable: true })
  venDcDate: Date | null;

  @Column("varchar2", { name: "VEN_INV_NO", nullable: true, length: 20 })
  venInvNo: string | null;

  @Column("date", { name: "VEN_INV_DATE", nullable: true })
  venInvDate: Date | null;

  @Column("number", {
    name: "CR_DAYS",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  crDays: number | null;

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
    scale: 3,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  othLess: number | null;

  @Column("number", { name: "DC_AMT", nullable: true, precision: 10, scale: 2 })
  dcAmt: number | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  advAmt: number | null;

  @Column("number", {
    name: "AMT_PAID",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  amtPaid: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("number", {
    name: "DBN_RAISED",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  dbnRaised: number | null;

  @Column("number", {
    name: "DBN_ADJ",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  dbnAdj: number | null;

  @Column("varchar2", { name: "DC_ST", nullable: true, length: 1 })
  dcSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 10, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "TAX", nullable: true, length: 50 })
  tax: string | null;

  @Column("varchar2", { name: "GIN_TYPE", nullable: true, length: 50 })
  ginType: string | null;

  @Column("number", {
    name: "TMAS_STOCKFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tmasStockfk: number | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 10, scale: 0 })
  taxfk: number | null;

  @Column("number", {
    name: "TPUR_POFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tpurPofk: number | null;

  @Column("number", {
    name: "REFDOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  refdocfk: number | null;
}
