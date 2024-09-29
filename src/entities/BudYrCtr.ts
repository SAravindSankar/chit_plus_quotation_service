import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasRack } from "./MasRack";
import { JmasProduct } from "./JmasProduct";
import { BudYrSalper } from "./BudYrSalper";

@Index("YR_CTRPK", ["yrCtrpk"], { unique: true })
@Entity("BUD_YR_CTR")
export class BudYrCtr {
  @Column("number", {
    primary: true,
    name: "YR_CTRPK",
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  yrCtrpk: number;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasRack, (masRack) => masRack.budYrCtrs)
  @JoinColumn([{ name: "CTRFK", referencedColumnName: "rackpk" }])
  ctrfk: MasRack;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.budYrCtrs)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @OneToMany(() => BudYrSalper, (budYrSalper) => budYrSalper.yrCtrfk)
  budYrSalpers: BudYrSalper[];
}
