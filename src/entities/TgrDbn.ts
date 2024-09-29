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
import { TgrDbnDet2 } from "./TgrDbnDet2";

@Index("SYS_C0026095", ["tgrDbnpk"], { unique: true })
@Entity("TGR_DBN")
export class TgrDbn {
  @Column("number", {
    primary: true,
    name: "TGR_DBNPK",
    precision: 8,
    scale: 0,
  })
  tgrDbnpk: number;

  @Column("number", { name: "DBN_NO", nullable: true, precision: 5, scale: 0 })
  dbnNo: number | null;

  @Column("date", { name: "DBN_DATE", nullable: true })
  dbnDate: Date | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("varchar2", { name: "VEN_REF_NO", nullable: true, length: 20 })
  venRefNo: string | null;

  @Column("date", { name: "VEN_REF_DATE", nullable: true })
  venRefDate: Date | null;

  @Column("number", {
    name: "TGR_GRNFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrGrnfk: number | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

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
    name: "DBN_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  dbnAmt: number | null;

  @Column("char", { name: "DBN_TYPE", nullable: true, length: 1 })
  dbnType: string | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("char", { name: "DBN_ST", nullable: true, length: 1 })
  dbnSt: string | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
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
    name: "REC_PAY_FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recPayFk: number | null;

  @Column("char", { name: "REC_PAY", nullable: true, length: 1 })
  recPay: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "SALES_MANFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salesManfk: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 10, scale: 0 })
  taxfk: number | null;

  @Column("number", {
    name: "TGR_DCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcfk: number | null;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.tgrDbns)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;

  @ManyToOne(() => TranAdd, (tranAdd) => tranAdd.tgrDbns)
  @JoinColumn([{ name: "TRAN_ADDFK", referencedColumnName: "tranAddpk" }])
  tranAddfk: TranAdd;

  @OneToMany(() => TgrDbnDet2, (tgrDbnDet2) => tgrDbnDet2.tgrDbnfk)
  tgrDbnDets: TgrDbnDet2[];
}
