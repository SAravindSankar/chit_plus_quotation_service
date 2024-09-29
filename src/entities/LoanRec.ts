import { Column, Entity } from "typeorm";

@Entity("LOAN_REC")
export class LoanRec {
  @Column("number", {
    name: "LOANRECPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  loanrecpk: number | null;

  @Column("number", {
    name: "PAY_LOANFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  payLoanfk: number | null;

  @Column("number", { name: "INS_NO", nullable: true, precision: 3, scale: 0 })
  insNo: number | null;

  @Column("date", { name: "INS_DATE", nullable: true })
  insDate: Date | null;

  @Column("number", {
    name: "INS_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  insAmt: number | null;

  @Column("date", { name: "REC_DATE", nullable: true })
  recDate: Date | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
