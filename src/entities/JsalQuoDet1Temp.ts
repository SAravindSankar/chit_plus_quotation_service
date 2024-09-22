import { Column, Entity } from "typeorm";

@Entity("JSAL_QUO_DET1_TEMP")
export class JsalQuoDet1Temp {
  @Column("number", {
    name: "QUO_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDet1Pk: number | null;

  @Column("number", {
    name: "SAL_QUOFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salQuofk: number | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

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

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
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
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  rateAddPer: number | null;

  @Column("number", { name: "ADD_AMT", nullable: true, precision: 8, scale: 2 })
  addAmt: number | null;

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
}
