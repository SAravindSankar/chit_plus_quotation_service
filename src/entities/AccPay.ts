import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007440", ["paypk"], { unique: true })
@Entity("ACC_PAY")
export class AccPay {
  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BANKFK", nullable: true, precision: 6, scale: 0 })
  bankfk: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "FOR_BRANCH1FK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranch1Fk: number | null;

  @Column("number", {
    name: "FOR_BRANCH2FK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranch2Fk: number | null;

  @Column("number", {
    name: "CHQINV_DDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  chqinvDdfk: number | null;

  @Column("date", { name: "BREF_DD_DATE", nullable: true })
  brefDdDate: Date | null;

  @Column("char", { name: "BREF_DD_NO", nullable: true, length: 30 })
  brefDdNo: string | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "NARRFK", nullable: true, precision: 6, scale: 0 })
  narrfk: number | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "PC_FK", nullable: true, precision: 8, scale: 0 })
  pcFk: number | null;

  @Column("number", {
    name: "OTH_MODE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  othMode: number | null;

  @Column("number", {
    name: "CASH_RECD",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  cashRecd: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "BREF_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  brefAccfk: number | null;

  @Column("number", { primary: true, name: "PAYPK", precision: 8, scale: 0 })
  paypk: number;

  @Column("number", { name: "PAY_NO", nullable: true, precision: 6, scale: 0 })
  payNo: number | null;

  @Column("date", { name: "PAY_DATE", nullable: true })
  payDate: Date | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 6, scale: 0 })
  partyfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 6,
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

  @Column("number", {
    name: "PAY_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  payAmt: number | null;

  @Column("char", { name: "PAY_ST", nullable: true, length: 1 })
  paySt: string | null;

  @Column("char", { name: "PAY_TYPE", nullable: true, length: 1 })
  payType: string | null;

  @Column("char", { name: "PAY_MODE", nullable: true, length: 1 })
  payMode: string | null;

  @Column("char", { name: "BSLCODE", nullable: true, length: 4 })
  bslcode: string | null;

  @Column("varchar2", { name: "BREF_NO", nullable: true, length: 6 })
  brefNo: string | null;

  @Column("date", { name: "BREF_DATE", nullable: true })
  brefDate: Date | null;

  @Column("number", {
    name: "CHQINVFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  chqinvfk: number | null;

  @Column("varchar2", { name: "NARRATION", nullable: true, length: 200 })
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
}
