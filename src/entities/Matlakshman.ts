import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008221", ["prodpk"], { unique: true })
@Entity("MATLAKSHMAN")
export class Matlakshman {
  @Column("number", { primary: true, name: "PRODPK", precision: 8, scale: 0 })
  prodpk: number;

  @Column("number", {
    name: "PRODCLASSPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  prodclasspk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar2", { name: "MODEL_NO", nullable: true, length: 30 })
  modelNo: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 30 })
  description: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 15 })
  shortName: string | null;

  @Column("char", { name: "WEIGHT_RATE", nullable: true, length: 1 })
  weightRate: string | null;

  @Column("char", { name: "PRODID", nullable: true, length: 1 })
  prodid: string | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("char", { name: "PAIR", nullable: true, length: 1 })
  pair: string | null;

  @Column("char", { name: "TAGGED", nullable: true, length: 1 })
  tagged: string | null;

  @Column("char", { name: "STONE_ITEM", nullable: true, length: 1 })
  stoneItem: string | null;

  @Column("char", { name: "STONE", nullable: true, length: 1 })
  stone: string | null;

  @Column("char", { name: "DIAMOND", nullable: true, length: 1 })
  diamond: string | null;

  @Column("char", { name: "PRECIOUS_STONE", nullable: true, length: 1 })
  preciousStone: string | null;

  @Column("char", { name: "REPAIRITEM", nullable: true, length: 1 })
  repairitem: string | null;

  @Column("char", { name: "SPARE", nullable: true, length: 1 })
  spare: string | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", {
    name: "HLEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  hlevelNo: number | null;

  @Column("number", { name: "TAG_NO", nullable: true, precision: 5, scale: 0 })
  tagNo: number | null;

  @Column("number", { name: "PRODHFK", nullable: true, precision: 4, scale: 0 })
  prodhfk: number | null;

  @Column("number", {
    name: "HPRODCLASSFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  hprodclassfk: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 4, scale: 0 })
  staxfk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "FIRSTLEVELPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  firstlevelpk: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

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

  @Column("char", { name: "NETWTCAL", nullable: true, length: 1 })
  netwtcal: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
