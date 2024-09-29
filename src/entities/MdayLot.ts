import { Column, Entity } from "typeorm";

@Entity("MDAY_LOT")
export class MdayLot {
  @Column("number", { name: "TAG_PK", nullable: true, precision: 8, scale: 0 })
  tagPk: number | null;

  @Column("number", { name: "LOTFK", nullable: true, precision: 8, scale: 0 })
  lotfk: number | null;

  @Column("number", { name: "TAG_NO", nullable: true, precision: 6, scale: 0 })
  tagNo: number | null;

  @Column("number", { name: "TAG_PCS", nullable: true, precision: 5, scale: 0 })
  tagPcs: number | null;

  @Column("number", { name: "TAG_WT", nullable: true, precision: 8, scale: 3 })
  tagWt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
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

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
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

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;
}
