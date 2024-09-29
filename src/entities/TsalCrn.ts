import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008907", ["tsalCrnpk"], { unique: true })
@Entity("TSAL_CRN")
export class TsalCrn {
  @Column("number", {
    primary: true,
    name: "TSAL_CRNPK",
    precision: 8,
    scale: 0,
  })
  tsalCrnpk: number;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "CRN_NO", nullable: true, precision: 5, scale: 0 })
  crnNo: number | null;

  @Column("date", { name: "CRN_DATE", nullable: true })
  crnDate: Date | null;

  @Column("char", { name: "CRN_TYPE", nullable: true, length: 1 })
  crnType: string | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 8, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("varchar2", { name: "PARTY_REF", nullable: true, length: 50 })
  partyRef: string | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

  @Column("number", {
    name: "CRN_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  crnAmt: number | null;

  @Column("char", { name: "CRN_ST", nullable: true, length: 1 })
  crnSt: string | null;

  @Column("varchar2", { name: "NARRATION", nullable: true, length: 100 })
  narration: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

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

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("char", { name: "CTR_NO", nullable: true, length: 4 })
  ctrNo: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "REC_PAY_FK",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  recPayFk: number | null;

  @Column("char", { name: "REC_PAY", nullable: true, length: 1 })
  recPay: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
