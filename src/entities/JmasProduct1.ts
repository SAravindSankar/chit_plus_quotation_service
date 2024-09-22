import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007686", ["prodclasspk"], { unique: true })
@Entity("JMAS_PRODUCT1")
export class JmasProduct1 {
  @Column("number", {
    primary: true,
    name: "PRODCLASSPK",
    precision: 8,
    scale: 0,
  })
  prodclasspk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PRODHFK", nullable: true, precision: 8, scale: 0 })
  prodhfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", {
    name: "HPRODCLASSFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  hprodclassfk: number | null;

  @Column("number", {
    name: "HLEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  hlevelNo: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 6, scale: 0 })
  staxfk: number | null;

  @Column("number", { name: "MMINAMT", nullable: true, precision: 8, scale: 2 })
  mminamt: number | null;

  @Column("number", { name: "MMAXAMT", nullable: true, precision: 8, scale: 2 })
  mmaxamt: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 15 })
  shortName: string | null;

  @Column("number", {
    name: "FIRSTLEVELPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  firstlevelpk: number | null;

  @Column("varchar2", { name: "MODEL_NO", nullable: true, length: 30 })
  modelNo: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 30 })
  description: string | null;

  @Column("number", { name: "PRODPK", nullable: true, precision: 8, scale: 0 })
  prodpk: number | null;

  @Column("number", { name: "TAG_NO", nullable: true, precision: 5, scale: 0 })
  tagNo: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 8, scale: 0 })
  rackfk: number | null;

  @Column("char", { name: "WEIGHT_RATE", nullable: true, length: 1 })
  weightRate: string | null;

  @Column("char", { name: "PRODID", nullable: true, length: 1 })
  prodid: string | null;

  @Column("number", {
    name: "GS1112FK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  gs1112Fk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("char", { name: "TAGGED", nullable: true, length: 1 })
  tagged: string | null;

  @Column("char", { name: "STONE_ITEM", nullable: true, length: 1 })
  stoneItem: string | null;

  @Column("char", { name: "OTHER", nullable: true, length: 1 })
  other: string | null;

  @Column("char", { name: "STONE", nullable: true, length: 1 })
  stone: string | null;

  @Column("char", { name: "DIAMOND", nullable: true, length: 1 })
  diamond: string | null;

  @Column("char", { name: "WASTAGE", nullable: true, length: 1 })
  wastage: string | null;

  @Column("char", { name: "REPAIRITEM", nullable: true, length: 1 })
  repairitem: string | null;

  @Column("char", { name: "SPARE", nullable: true, length: 1 })
  spare: string | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("char", { name: "PAIR", nullable: true, length: 1 })
  pair: string | null;

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("char", { name: "NEW_OLD_PROD", nullable: true, length: 3 })
  newOldProd: string | null;

  @Column("char", { name: "NEW_OLD_SUB", nullable: true, length: 3 })
  newOldSub: string | null;

  @Column("number", { name: "OP_PCS", nullable: true, precision: 10, scale: 0 })
  opPcs: number | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", {
    name: "MINUS_PCS",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  minusPcs: number | null;

  @Column("number", {
    name: "PLUS_PCS",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  plusPcs: number | null;

  @Column("number", {
    name: "PLUS_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  plusWt: number | null;

  @Column("number", {
    name: "MINUS_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  minusWt: number | null;

  @Column("number", { name: "CL_PCS", nullable: true, precision: 10, scale: 0 })
  clPcs: number | null;

  @Column("number", { name: "CL_WT", nullable: true, precision: 12, scale: 3 })
  clWt: number | null;

  @Column("number", {
    name: "YEAR_OP_PCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  yearOpPcs: number | null;

  @Column("number", {
    name: "YEAR_OP_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  yearOpWt: number | null;

  @Column("number", {
    name: "PURTYPEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  purtypefk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("char", { name: "STN_OPT", nullable: true, length: 1 })
  stnOpt: string | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("number", {
    name: "REFPRODPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refprodpk: number | null;

  @Column("char", { name: "PRECIOUS_STONE", nullable: true, length: 1 })
  preciousStone: string | null;

  @Column("number", {
    name: "TRAN_PRICE_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranPriceDetfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
