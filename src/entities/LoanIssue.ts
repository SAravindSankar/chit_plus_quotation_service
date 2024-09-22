import { Column, Entity } from "typeorm";

@Entity("LOAN_ISSUE")
export class LoanIssue {
  @Column("number", {
    name: "PAY_LOANPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  payLoanpk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("number", { name: "REF_NO", nullable: true, precision: 8, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", {
    name: "LOAN_TYPEFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  loanTypefk: number | null;

  @Column("number", {
    name: "INT_RATE",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  intRate: number | null;

  @Column("number", { name: "INT_AMT", nullable: true, precision: 8, scale: 2 })
  intAmt: number | null;

  @Column("number", { name: "NOI", nullable: true, precision: 3, scale: 0 })
  noi: number | null;

  @Column("number", { name: "INS_AMT", nullable: true, precision: 8, scale: 2 })
  insAmt: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("number", { name: "DOC_FK", nullable: true, precision: 8, scale: 0 })
  docFk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
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

  @Column("char", { name: "LOAN_ST", nullable: true, length: 1 })
  loanSt: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
