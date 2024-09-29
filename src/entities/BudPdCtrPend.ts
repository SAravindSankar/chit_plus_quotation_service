import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BudPdCtr } from "./BudPdCtr";
import { MasRack } from "./MasRack";

@Index("PD_CTR_PENDPK", ["pdCtrPendpk"], { unique: true })
@Entity("BUD_PD_CTR_PEND")
export class BudPdCtrPend {
  @Column("number", {
    primary: true,
    name: "PD_CTR_PENDPK",
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  pdCtrPendpk: number;

  @Column("number", {
    name: "PER_DAY_WT",
    nullable: true,
    precision: 10,
    scale: 3,
    default: () => "0",
  })
  perDayWt: number | null;

  @Column("number", {
    name: "PER_DAY_PCS",
    nullable: true,
    precision: 6,
    scale: 1,
    default: () => "0",
  })
  perDayPcs: number | null;

  @Column("number", {
    name: "PER_DAY_PER",
    nullable: true,
    precision: 6,
    scale: 2,
    default: () => "0",
  })
  perDayPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => BudPdCtr, (budPdCtr) => budPdCtr.budPdCtrPends)
  @JoinColumn([{ name: "PD_CTRFK", referencedColumnName: "pdCtrpk" }])
  pdCtrfk: BudPdCtr;

  @ManyToOne(() => MasRack, (masRack) => masRack.budPdCtrPends)
  @JoinColumn([{ name: "PD_CTRFK", referencedColumnName: "rackpk" }])
  pdCtrfk2: MasRack;
}
