import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";
import { JmasProduct } from "./JmasProduct";

@Index("CHRG_DETPK", ["chrgDetpk"], { unique: true })
@Entity("JMAS_CHRG_DET")
export class JmasChrgDet {
  @Column("number", {
    primary: true,
    name: "CHRG_DETPK",
    precision: 8,
    scale: 0,
  })
  chrgDetpk: number;

  @Column("char", {
    name: "PCS_WT",
    nullable: true,
    length: 1,
    default: () => "'W'",
  })
  pcsWt: string | null;

  @Column("number", {
    name: "RANGE_FROM",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeFrom: number | null;

  @Column("number", {
    name: "RANGE_TO",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeTo: number | null;

  @Column("number", {
    name: "CHRG_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  chrgRate: number | null;

  @Column("number", { name: "CHRG_WT", nullable: true, precision: 8, scale: 3 })
  chrgWt: number | null;

  @Column("number", {
    name: "CHRG_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  chrgPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "REORD_LEVEL",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reordLevel: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("number", { name: "ROQ", nullable: true, precision: 8, scale: 3 })
  roq: number | null;

  @Column("number", {
    name: "MIN_CHRG_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  minChrgRate: number | null;

  @Column("number", {
    name: "MIN_CHRG_AMOUNT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minChrgAmount: number | null;

  @Column("number", {
    name: "MIN_CHRG_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  minChrgPer: number | null;

  @Column("number", {
    name: "MIN_CHRG_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  minChrgWt: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 3,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("number", {
    name: "MIN_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  minMcPercent: number | null;

  @Column("number", {
    name: "MAX_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  maxMcPercent: number | null;

  @Column("number", {
    name: "MIN_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  minWcAmt: number | null;

  @Column("number", {
    name: "MAX_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  maxWcAmt: number | null;

  @Column("number", {
    name: "AWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  awt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  addRateAmt: number | null;

  @Column("number", {
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  rateAddPer: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discPer: number | null;

  @Column("number", {
    name: "REFPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refprodfk: number | null;

  @Column("number", {
    name: "DISC_AMOUNT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discAmount: number | null;

  @Column("varchar2", { name: "RANGE_LABEL", nullable: true, length: 10 })
  rangeLabel: string | null;

  @Column("number", { name: "SIZ", nullable: true, precision: 5, scale: 2 })
  siz: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jmasChrgDets)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasChrgDets)
  @JoinColumn([{ name: "PROD_CHRGFK", referencedColumnName: "prodclasspk" }])
  prodChrgfk: JmasProduct;
}
