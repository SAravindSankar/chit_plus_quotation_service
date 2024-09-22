import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { BudPdCtr } from "./BudPdCtr";
import { MasRack } from "./MasRack";
import { MasEmp } from "./MasEmp";
import { BudPdSalperPend } from "./BudPdSalperPend";

@Index("PD_SALPERPK", ["pdSalperpk"], { unique: true })
@Entity("BUD_PD_SALPER")
export class BudPdSalper {
  @Column("number", {
    primary: true,
    name: "PD_SALPERPK",
    precision: 8,
    scale: 0,
  })
  pdSalperpk: number;

  @Column("number", { name: "STOCK", nullable: true, precision: 10, scale: 3 })
  stock: number | null;

  @Column("number", {
    name: "NO_TIMES",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  noTimes: number | null;

  @Column("number", { name: "IN_DAYS", nullable: true, precision: 3, scale: 0 })
  inDays: number | null;

  @Column("number", {
    name: "PER_DAY_WT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  perDayWt: number | null;

  @Column("number", {
    name: "PER_DAY_PCS",
    nullable: true,
    precision: 6,
    scale: 1,
  })
  perDayPcs: number | null;

  @Column("number", {
    name: "PER_DAY_PER",
    nullable: true,
    precision: 6,
    scale: 2,
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

  @ManyToOne(() => BudPdCtr, (budPdCtr) => budPdCtr.budPdSalpers)
  @JoinColumn([{ name: "PD_CTRFK", referencedColumnName: "pdCtrpk" }])
  pdCtrfk: BudPdCtr;

  @ManyToOne(() => MasRack, (masRack) => masRack.budPdSalpers)
  @JoinColumn([{ name: "PD_CTRFK", referencedColumnName: "rackpk" }])
  pdCtrfk2: MasRack;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.budPdSalpers)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @OneToMany(
    () => BudPdSalperPend,
    (budPdSalperPend) => budPdSalperPend.pdSalperfk
  )
  budPdSalperPends: BudPdSalperPend[];
}
