import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasRate } from "./JmasRate";
import { JmasProduct } from "./JmasProduct";

@Index("PROD_RATEPK", ["prodRatepk"], { unique: true })
@Entity("JMAS_PROD_RATE")
export class JmasProdRate {
  @Column("number", {
    primary: true,
    name: "PROD_RATEPK",
    precision: 6,
    scale: 0,
  })
  prodRatepk: number;

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

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("number", {
    name: "COIN_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  coinRate: number | null;

  @Column("number", {
    name: "PUR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  purRate: number | null;

  @Column("number", {
    name: "TEMP_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  tempRate: number | null;

  @Column("number", {
    name: "EXCH_CAL_PER",
    nullable: true,
    precision: 6,
    scale: 2,
    default: () => "0",
  })
  exchCalPer: number | null;

  @Column("number", {
    name: "EXCH_CAL_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  exchCalAmt: number | null;

  @Column("number", {
    name: "CASH_CAL_PER",
    nullable: true,
    precision: 6,
    scale: 2,
    default: () => "0",
  })
  cashCalPer: number | null;

  @Column("number", {
    name: "CASH_CAL_AMT",
    nullable: true,
    precision: 6,
    scale: 2,
    default: () => "0",
  })
  cashCalAmt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasRate, (jmasRate) => jmasRate.jmasProdRates)
  @JoinColumn([{ name: "MAS_RATEFK", referencedColumnName: "masRatepk" }])
  masRatefk: JmasRate;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jmasProdRates)
  @JoinColumn([{ name: "PRODCLASSFK", referencedColumnName: "prodclasspk" }])
  prodclassfk: JmasProduct;
}
