import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";
import { MasLoantype } from "./MasLoantype";

@Index("PAY_LOANPK", ["payLoanpk"], { unique: true })
@Entity("PAY_LOAN_TRAN")
export class PayLoanTran {
  @Column("number", {
    primary: true,
    name: "PAY_LOANPK",
    precision: 8,
    scale: 0,
  })
  payLoanpk: number;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 15 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "NOI", nullable: true, precision: 2, scale: 0 })
  noi: number | null;

  @Column("number", {
    name: "INT_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  intRate: number | null;

  @Column("number", {
    name: "INT_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  intAmt: number | null;

  @Column("number", {
    name: "TOT_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totAmt: number | null;

  @Column("number", { name: "INS_AMT", nullable: true, precision: 8, scale: 2 })
  insAmt: number | null;

  @Column("number", {
    name: "PAID_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  paidAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.payLoanTrans)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @ManyToOne(() => MasLoantype, (masLoantype) => masLoantype.payLoanTrans)
  @JoinColumn([{ name: "LOANTYPEFK", referencedColumnName: "loantypepk" }])
  loantypefk: MasLoantype;
}
