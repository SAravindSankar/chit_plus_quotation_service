import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { BudYrCtr } from "./BudYrCtr";
import { MasEmp } from "./MasEmp";

@Index("YR_SALPERPK", ["yrSalperpk"], { unique: true })
@Entity("BUD_YR_SALPER")
export class BudYrSalper {
  @Column("number", {
    primary: true,
    name: "YR_SALPERPK",
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  yrSalperpk: number;

  @Column("number", {
    name: "STOCK",
    nullable: true,
    precision: 10,
    scale: 3,
    default: () => "0",
  })
  stock: number | null;

  @Column("number", {
    name: "NO_TIMES",
    nullable: true,
    precision: 3,
    scale: 0,
    default: () => "0",
  })
  noTimes: number | null;

  @Column("number", {
    name: "IN_DAYS",
    nullable: true,
    precision: 3,
    scale: 0,
    default: () => "0",
  })
  inDays: number | null;

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

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    length: 20,
    default: () => "' '",
  })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => BudYrCtr, (budYrCtr) => budYrCtr.budYrSalpers, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "YR_CTRFK", referencedColumnName: "yrCtrpk" }])
  yrCtrfk: BudYrCtr;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.budYrSalpers)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
