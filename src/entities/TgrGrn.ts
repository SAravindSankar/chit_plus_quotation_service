import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasDoc } from "./MasDoc";
import { TranAdd } from "./TranAdd";
import { TranRem } from "./TranRem";
import { TgrGrnDet2 } from "./TgrGrnDet2";

@Index("SYS_C0026080", ["tgrGrnpk"], { unique: true })
@Entity("TGR_GRN")
export class TgrGrn {
  @Column("number", {
    primary: true,
    name: "TGR_GRNPK",
    precision: 8,
    scale: 0,
  })
  tgrGrnpk: number;

  @Column("number", { name: "GRN_NO", nullable: true, precision: 5, scale: 0 })
  grnNo: number | null;

  @Column("date", { name: "GRN_DATE", nullable: true })
  grnDate: Date | null;

  @Column("char", { name: "GRN_TYPE", nullable: true, length: 1 })
  grnType: string | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "TGR_DCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrDcfk: number | null;

  @Column("varchar2", { name: "VEN_DC_NO", nullable: true, length: 20 })
  venDcNo: string | null;

  @Column("date", { name: "VEN_DC_DATE", nullable: true })
  venDcDate: Date | null;

  @Column("varchar2", { name: "VEN_INV_NO", nullable: true, length: 20 })
  venInvNo: string | null;

  @Column("date", { name: "VEN_INV_DATE", nullable: true })
  venInvDate: Date | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 12,
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
    name: "GRN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  grnAmt: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("char", { name: "GRN_ST", nullable: true, length: 1 })
  grnSt: string | null;

  @Column("number", { name: "CR_DAYS", nullable: true, precision: 3, scale: 0 })
  crDays: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", {
    name: "TMAS_STOCK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tmasStock: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("char", { name: "GIN_TYPE", nullable: true, length: 1 })
  ginType: string | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", { name: "ADV_AMT", nullable: true, precision: 8, scale: 2 })
  advAmt: number | null;

  @Column("char", { name: "TAX", nullable: true, length: 1 })
  tax: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 10, scale: 0 })
  taxfk: number | null;

  @Column("number", {
    name: "DBN_ADJ",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  dbnAdj: number | null;

  @Column("number", {
    name: "AMT_PAID",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  amtPaid: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "DBN_RAISED",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  dbnRaised: number | null;

  @Column("number", {
    name: "DOC_REFDOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  docRefdocfk: number | null;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.tgrGrns)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;

  @ManyToOne(() => TranAdd, (tranAdd) => tranAdd.tgrGrns)
  @JoinColumn([{ name: "TRAN_ADDFK", referencedColumnName: "tranAddpk" }])
  tranAddfk: TranAdd;

  @ManyToOne(() => TranRem, (tranRem) => tranRem.tgrGrns)
  @JoinColumn([{ name: "TRAN_REMFK", referencedColumnName: "tranRempk" }])
  tranRemfk: TranRem;

  @OneToMany(() => TgrGrnDet2, (tgrGrnDet2) => tgrGrnDet2.tgrGrnfk)
  tgrGrnDets: TgrGrnDet2[];
}
