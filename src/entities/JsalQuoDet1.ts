import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JsalQuo } from "./JsalQuo";
import { JmasProduct } from "./JmasProduct";
import { JsalQuoDet11 } from "./JsalQuoDet11";
import { JsalQuoPart } from "./JsalQuoPart";

@Index("JQUO_DET1PK", ["quoDet1Pk"], { unique: true })
@Entity("JSAL_QUO_DET1")
export class JsalQuoDet1 {
  @Column("number", {
    primary: true,
    name: "QUO_DET1PK",
    precision: 8,
    scale: 0,
  })
  quoDet1Pk: number;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("char", { name: "STONE", nullable: true, length: 1 })
  stone: string | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "CURR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  currRate: number | null;

  @Column("number", {
    name: "MIN_MC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  minMcPer: number | null;

  @Column("number", {
    name: "MIN_MC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minMcAmt: number | null;

  @Column("number", {
    name: "MAX_MC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  maxMcPer: number | null;

  @Column("number", {
    name: "MAX_MC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxMcAmt: number | null;

  @Column("number", {
    name: "MIN_WC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  minWcPer: number | null;

  @Column("number", {
    name: "MIN_WC_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  minWcWt: number | null;

  @Column("number", {
    name: "MAX_WC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  maxWcPer: number | null;

  @Column("number", {
    name: "MAX_WC_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  maxWcWt: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("char", { name: "TAG_IND", nullable: true, length: 1 })
  tagInd: string | null;

  @Column("number", {
    name: "BOARD_PURITY",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  boardPurity: number | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("number", { name: "NET_WT", nullable: true, precision: 8, scale: 3 })
  netWt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  addAmt: number | null;

  @Column("number", {
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  rateAddPer: number | null;

  @Column("number", { name: "AWT", nullable: true, precision: 8, scale: 3 })
  awt: number | null;

  @Column("number", {
    name: "MAX_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxWcAmt: number | null;

  @Column("number", {
    name: "MAX_MC_PERCENT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxMcPercent: number | null;

  @Column("number", {
    name: "NWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  nwt: number | null;

  @Column("number", {
    name: "GWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  gwt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "VA_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  vaValue: number | null;

  @Column("number", {
    name: "METAL_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  metalValue: number | null;

  @Column("number", {
    name: "DIFF_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  diffAmt: number | null;

  @Column("number", {
    name: "SALCODEFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salcodefk: number | null;

  @Column("number", {
    name: "STONE_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  stoneValue: number | null;

  @Column("number", { name: "CHIT_WT", nullable: true, precision: 8, scale: 3 })
  chitWt: number | null;

  @Column("number", {
    name: "CHIT_AVGR",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  chitAvgr: number | null;

  @ManyToOne(() => JsalQuo, (jsalQuo) => jsalQuo.jsalQuoDets)
  @JoinColumn([{ name: "SAL_QUOFK", referencedColumnName: "salQuopk" }])
  salQuofk: JsalQuo;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalQuoDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @OneToMany(() => JsalQuoDet11, (jsalQuoDet11) => jsalQuoDet11.quoDet1Fk)
  jsalQuoDets: JsalQuoDet11[];

  @OneToMany(() => JsalQuoPart, (jsalQuoPart) => jsalQuoPart.quoDet1Fk)
  jsalQuoParts: JsalQuoPart[];
}
