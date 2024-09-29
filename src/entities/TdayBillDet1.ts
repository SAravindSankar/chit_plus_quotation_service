import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL_DET1")
export class TdayBillDet1 {
  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("number", {
    name: "JSAL_REFFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jsalReffk: number | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 8, scale: 3 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BILL_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDet1Pk: number | null;

  @Column("number", {
    name: "CURR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  currRate: number | null;

  @Column("number", { name: "MC_PER", nullable: true, precision: 8, scale: 2 })
  mcPer: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("number", { name: "WC_PER", nullable: true, precision: 5, scale: 2 })
  wcPer: number | null;

  @Column("number", { name: "WC_WT", nullable: true, precision: 8, scale: 3 })
  wcWt: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 5 })
  oldSubCd: string | null;

  @Column("number", {
    name: "QUO_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  quoAmt: number | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("number", { name: "AWT", nullable: true, precision: 8, scale: 3 })
  awt: number | null;

  @Column("number", {
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  rateAddPer: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("number", { name: "NET_WT", nullable: true, precision: 8, scale: 3 })
  netWt: number | null;

  @Column("number", {
    name: "MIN_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  minMcPercent: number | null;

  @Column("number", {
    name: "MAX_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  maxMcPercent: number | null;

  @Column("number", {
    name: "MIN_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minWcAmt: number | null;

  @Column("number", {
    name: "MAX_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxWcAmt: number | null;

  @Column("number", { name: "NONTAG", nullable: true, precision: 8, scale: 0 })
  nontag: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;

  @Column("number", {
    name: "ADD_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  addAmt: number | null;

  @Column("char", { name: "INV_FLAG", nullable: true, length: 1 })
  invFlag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "TEMPWT", nullable: true, precision: 12, scale: 3 })
  tempwt: number | null;

  @Column("number", {
    name: "TEMPPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tempprodfk: number | null;
}
