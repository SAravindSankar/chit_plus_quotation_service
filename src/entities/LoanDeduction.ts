import { Column, Entity } from "typeorm";

@Entity("LOAN_DEDUCTION")
export class LoanDeduction {
  @Column("number", {
    name: "LOAN_DEDUPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  loanDedupk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("varchar2", { name: "MONTHYEAR", nullable: true, length: 8 })
  monthyear: string | null;

  @Column("number", {
    name: "ALL_DEDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  allDedfk: number | null;

  @Column("number", { name: "INS_NO", nullable: true, precision: 3, scale: 0 })
  insNo: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
