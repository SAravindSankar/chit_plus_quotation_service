import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007473", ["recpk"], { unique: true })
@Entity("ACC_REC")
export class AccRec {
  @Column("number", { primary: true, name: "RECPK", precision: 8, scale: 0 })
  recpk: number;

  @Column("number", { name: "REC_NO", nullable: true, precision: 6, scale: 0 })
  recNo: number | null;

  @Column("date", { name: "REC_DATE", nullable: true })
  recDate: Date | null;

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
    name: "REC_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  recAmt: number | null;

  @Column("char", { name: "REC_ST", nullable: true, length: 1 })
  recSt: string | null;

  @Column("char", { name: "REC_TYPE", nullable: true, length: 1 })
  recType: string | null;

  @Column("char", { name: "REC_MODE", nullable: true, length: 1 })
  recMode: string | null;

  @Column("char", { name: "BSLCODE", nullable: true, length: 4 })
  bslcode: string | null;

  @Column("char", { name: "BREF_NO", nullable: true, length: 30 })
  brefNo: string | null;

  @Column("date", { name: "BREF_DATE", nullable: true })
  brefDate: Date | null;

  @Column("varchar2", { name: "BANK_NAME", nullable: true, length: 30 })
  bankName: string | null;

  @Column("varchar2", { name: "BANK_BRANCH", nullable: true, length: 25 })
  bankBranch: string | null;

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

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BANKFK", nullable: true, precision: 6, scale: 0 })
  bankfk: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "OTHTRAN_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  othtranNo: number | null;

  @Column("date", { name: "OTHTRAN_DATE", nullable: true })
  othtranDate: Date | null;

  @Column("number", {
    name: "DEP_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  depAccfk: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "FOR_BRANCH2FK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranch2Fk: number | null;

  @Column("number", {
    name: "FOR_BRANCH1FK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranch1Fk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

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

  @Column("number", {
    name: "BOARD_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  boardRate: number | null;

  @Column("number", { name: "PAYFK", nullable: true, precision: 8, scale: 0 })
  payfk: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  paidAmt: number | null;

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

  @Column("char", { name: "CHQDD_TYPE", nullable: true, length: 1 })
  chqddType: string | null;

  @Column("char", { name: "CHQ_NO", nullable: true, length: 6 })
  chqNo: string | null;

  @Column("date", { name: "CHQ_DATE", nullable: true })
  chqDate: Date | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "RET_TYPE", nullable: true, length: 5 })
  retType: string | null;

  @Column("number", {
    name: "RET_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  retAccfk: number | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;
}
