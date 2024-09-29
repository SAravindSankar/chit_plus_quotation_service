import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasRack } from "./MasRack";
import { MasFestival } from "./MasFestival";
import { JmasProduct } from "./JmasProduct";
import { BudPdCtrPend } from "./BudPdCtrPend";
import { BudPdSalper } from "./BudPdSalper";

@Index("PD_CTRPK", ["pdCtrpk"], { unique: true })
@Entity("BUD_PD_CTR")
export class BudPdCtr {
  @Column("number", {
    primary: true,
    name: "PD_CTRPK",
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  pdCtrpk: number;

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

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", {
    name: "RROWID",
    nullable: true,
    length: 16,
    default: () => "'0'",
  })
  rrowid: Buffer | null;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    length: 20,
    default: () => "'0'",
  })
  delflag: string | null;

  @Column("number", {
    name: "CBYFK",
    nullable: true,
    precision: 4,
    scale: 0,
    default: () => "0",
  })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", {
    name: "MBYFK",
    nullable: true,
    precision: 4,
    scale: 0,
    default: () => "0",
  })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("char", {
    name: "TRANYEAR",
    nullable: true,
    length: 4,
    default: () => "'0'",
  })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasRack, (masRack) => masRack.budPdCtrs)
  @JoinColumn([{ name: "CTRFK", referencedColumnName: "rackpk" }])
  ctrfk: MasRack;

  @ManyToOne(() => MasFestival, (masFestival) => masFestival.budPdCtrs)
  @JoinColumn([{ name: "FESTFK", referencedColumnName: "festpk" }])
  festfk: MasFestival;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.budPdCtrs)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @OneToMany(() => BudPdCtrPend, (budPdCtrPend) => budPdCtrPend.pdCtrfk)
  budPdCtrPends: BudPdCtrPend[];

  @OneToMany(() => BudPdSalper, (budPdSalper) => budPdSalper.pdCtrfk)
  budPdSalpers: BudPdSalper[];
}
