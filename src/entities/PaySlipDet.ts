import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { PaySlip } from "./PaySlip";
import { MasAllowDed } from "./MasAllowDed";

@Index("PAY_SLIP_DETPK", ["paySlipDetpk"], { unique: true })
@Entity("PAY_SLIP_DET")
export class PaySlipDet {
  @Column("number", {
    primary: true,
    name: "PAY_SLIP_DETPK",
    precision: 8,
    scale: 0,
  })
  paySlipDetpk: number;

  @Column("number", {
    name: "ALL_DED_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  allDedPer: number | null;

  @Column("number", { name: "AMOUNT", precision: 10, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "ACTUAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  actualAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => PaySlip, (paySlip) => paySlip.paySlipDets)
  @JoinColumn([{ name: "PAY_SLIPFK", referencedColumnName: "paySlippk" }])
  paySlipfk: PaySlip;

  @ManyToOne(() => MasAllowDed, (masAllowDed) => masAllowDed.paySlipDets)
  @JoinColumn([{ name: "ALL_DEDFK", referencedColumnName: "allowDedpk" }])
  allDedfk: MasAllowDed;
}
