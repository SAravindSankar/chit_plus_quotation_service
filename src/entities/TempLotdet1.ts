import { Column, Entity } from "typeorm";

@Entity("TEMP_LOTDET1")
export class TempLotdet1 {
  @Column("number", { name: "TAG_PK", precision: 8, scale: 0 })
  tagPk: number;

  @Column("number", { name: "LOTFK", nullable: true, precision: 8, scale: 0 })
  lotfk: number | null;

  @Column("number", { name: "TAG_NO", nullable: true, precision: 6, scale: 0 })
  tagNo: number | null;

  @Column("number", { name: "TAG_PCS", nullable: true, precision: 5, scale: 0 })
  tagPcs: number | null;

  @Column("number", { name: "TAG_WT", nullable: true, precision: 8, scale: 3 })
  tagWt: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("char", { name: "PRODID", nullable: true, length: 1 })
  prodid: string | null;

  @Column("char", { name: "PROD_TAGNO", nullable: true, length: 5 })
  prodTagno: string | null;

  @Column("number", {
    name: "TAG_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  tagRate: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("date", { name: "TAG_DATE", nullable: true })
  tagDate: Date | null;

  @Column("char", { name: "INPUT_WT", nullable: true, length: 1 })
  inputWt: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

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
    precision: 8,
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

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("char", { name: "TMJ", nullable: true, length: 1 })
  tmj: string | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

  @Column("char", { name: "REF_IND", nullable: true, length: 1 })
  refInd: string | null;

  @Column("char", { name: "KDM", nullable: true, length: 1 })
  kdm: string | null;

  @Column("char", { name: "KCODE", nullable: true, length: 2 })
  kcode: string | null;

  @Column("number", {
    name: "ALTTAGFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  alttagfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", {
    name: "ORD_REPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  ordRepfk: number | null;

  @Column("date", { name: "ISS_DATE", nullable: true })
  issDate: Date | null;

  @Column("number", {
    name: "BOARD_PURITY",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  boardPurity: number | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("varchar2", { name: "DLRCODE", nullable: true, length: 20 })
  dlrcode: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

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

  @Column("number", { name: "AWT", nullable: true, precision: 8, scale: 3 })
  awt: number | null;

  @Column("char", { name: "ORD_REP", nullable: true, length: 1 })
  ordRep: string | null;

  @Column("char", { name: "PROD_IDA", nullable: true, length: 4 })
  prodIda: string | null;

  @Column("number", {
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  rateAddPer: number | null;

  @Column("number", { name: "ADD_AMT", nullable: true, precision: 5, scale: 2 })
  addAmt: number | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 12 })
  refNo: string | null;

  @Column("number", {
    name: "TEMP_MCGM",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  tempMcgm: number | null;

  @Column("number", {
    name: "TEMPTAG_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  temptagWt: number | null;

  @Column("varchar2", { name: "PCODE", nullable: true, length: 10 })
  pcode: string | null;

  @Column("char", { name: "RATE_FIX", nullable: true, length: 1 })
  rateFix: string | null;

  @Column("char", { name: "CAL_IND", nullable: true, length: 1 })
  calInd: string | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discPer: number | null;

  @Column("number", {
    name: "TEMP_GWT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  tempGwt: number | null;

  @Column("number", {
    name: "TEMP_NWT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  tempNwt: number | null;

  @Column("number", {
    name: "TEMP_CODE",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  tempCode: number | null;

  @Column("number", {
    name: "TEMP_MCAMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  tempMcamt: number | null;

  @Column("varchar2", { name: "TEMP_PCODE", nullable: true, length: 10 })
  tempPcode: string | null;

  @Column("number", {
    name: "REFALTTAGFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refalttagfk: number | null;

  @Column("number", {
    name: "PREPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  preprodfk: number | null;

  @Column("number", {
    name: "REFPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refprodfk: number | null;

  @Column("number", {
    name: "TEMPPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tempprodfk: number | null;

  @Column("varchar2", { name: "REF_OLDPRODCD", nullable: true, length: 5 })
  refOldprodcd: string | null;

  @Column("char", { name: "TEMP_DIPRODRECT", nullable: true, length: 1 })
  tempDiprodrect: string | null;

  @Column("number", {
    name: "TEMPRACKFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  temprackfk: number | null;

  @Column("varchar2", { name: "OLD", nullable: true, length: 10 })
  old: string | null;

  @Column("number", {
    name: "TAG_CSTPRICE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  tagCstprice: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "REFTAGFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reftagfk: number | null;

  @Column("char", { name: "WEIGHT_RATE", nullable: true, length: 1 })
  weightRate: string | null;

  @Column("char", { name: "ORDERREP", nullable: true, length: 1 })
  orderrep: string | null;

  @Column("number", {
    name: "ORDERNO",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  orderno: number | null;

  @Column("number", {
    name: "OLDLESS_WT",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  oldlessWt: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "DISC_AMOUNT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discAmount: number | null;
}
