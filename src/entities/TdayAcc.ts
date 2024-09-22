import { Column, Entity } from "typeorm";

@Entity("TDAY_ACC")
export class TdayAcc {
  @Column("number", {
    name: "ACC_VOUPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  accVoupk: number | null;

  @Column("number", {
    name: "ACC_VOU_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  accVouNo: number | null;

  @Column("date", { name: "ACC_VOU_DT", nullable: true })
  accVouDt: Date | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "EXPACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  expaccfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("char", { name: "ACC_VOU_ST", nullable: true, length: 1 })
  accVouSt: string | null;

  @Column("char", { name: "RP_IND", nullable: true, length: 1 })
  rpInd: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("char", { name: "SELECTED", nullable: true, length: 1 })
  selected: string | null;

  @Column("char", { name: "REC_PAY_MODE", nullable: true, length: 1 })
  recPayMode: string | null;

  @Column("char", { name: "OR_IND", nullable: true, length: 1 })
  orInd: string | null;

  @Column("number", {
    name: "ORD_REPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  ordRepfk: number | null;

  @Column("char", { name: "VC_TYPE", nullable: true, length: 1 })
  vcType: string | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("varchar2", { name: "BANK_NAME", nullable: true, length: 30 })
  bankName: string | null;

  @Column("varchar2", { name: "BANK_BRANCH", nullable: true, length: 25 })
  bankBranch: string | null;

  @Column("number", { name: "BANKFK", nullable: true, precision: 6, scale: 0 })
  bankfk: number | null;

  @Column("char", { name: "BREF_NO", nullable: true, length: 30 })
  brefNo: string | null;

  @Column("date", { name: "BREF_DATE", nullable: true })
  brefDate: Date | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("char", { name: "WT_AMT", nullable: true, length: 1 })
  wtAmt: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "BOARD_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  boardRate: number | null;

  @Column("number", { name: "PAYFK", nullable: true, precision: 8, scale: 0 })
  payfk: number | null;

  @Column("number", {
    name: "REF_TRANFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refTranfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
