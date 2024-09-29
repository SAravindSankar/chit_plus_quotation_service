import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasProduct } from "./JmasProduct";
import { JhisRate } from "./JhisRate";

@Index("HIS_PROD_RATEPK", ["hisProdRatepk"], { unique: true })
@Entity("JHIS_PROD_RATE")
export class JhisProdRate {
  @Column("number", {
    name: "UNIT_PER",
    nullable: true,
    precision: 5,
    scale: 3,
  })
  unitPer: number | null;

  @Column("number", {
    name: "BULLION_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  bullionRate: number | null;

  @Column("number", {
    name: "PREMIUM_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  premiumRate: number | null;

  @Column("number", {
    name: "DUTY_PER_GM",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  dutyPerGm: number | null;

  @Column("number", {
    name: "COMMN_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  commnPer: number | null;

  @Column("number", { name: "ST_PER", nullable: true, precision: 5, scale: 2 })
  stPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "DOLLAR_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  dollarRate: number | null;

  @Column("number", {
    name: "RUPEE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  rupeeRate: number | null;

  @Column("number", {
    name: "STD_DUTY_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  stdDutyAmt: number | null;

  @Column("number", {
    name: "COMMN_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  commnAmt: number | null;

  @Column("number", { name: "ST_AMT", nullable: true, precision: 8, scale: 2 })
  stAmt: number | null;

  @Column("number", {
    name: "NET_PRICE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  netPrice: number | null;

  @Column("number", {
    name: "UNIT_PER_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  unitPerRate: number | null;

  @Column("number", {
    name: "EXCH_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  exchRate: number | null;

  @Column("number", {
    name: "CASH_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  cashRate: number | null;

  @Column("number", {
    primary: true,
    name: "HIS_PROD_RATEPK",
    precision: 8,
    scale: 0,
  })
  hisProdRatepk: number;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jhisProdRates)
  @JoinColumn([{ name: "PRODCLASSFK", referencedColumnName: "prodclasspk" }])
  prodclassfk: JmasProduct;

  @ManyToOne(() => JhisRate, (jhisRate) => jhisRate.jhisProdRates)
  @JoinColumn([{ name: "HIS_RATEFK", referencedColumnName: "hisRatepk" }])
  hisRatefk: JhisRate;
}
