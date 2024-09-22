import { Column, Entity } from "typeorm";

@Entity("JWORKING")
export class Jworking {
  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
  oldProdCd: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", { name: "PRODPK", nullable: true, precision: 8, scale: 0 })
  prodpk: number | null;

  @Column("number", {
    name: "HPRODCLASSFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  hprodclassfk: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 6, scale: 0 })
  staxfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("char", { name: "TAX_TYPE", nullable: true, length: 2 })
  taxType: string | null;

  @Column("varchar2", { name: "TPNAME", nullable: true, length: 40 })
  tpname: string | null;

  @Column("number", {
    name: "BILL_PCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  billPcs: number | null;

  @Column("number", {
    name: "BILL_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  billWt: number | null;

  @Column("number", {
    name: "BILL_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  billAmt: number | null;

  @Column("number", { name: "EST_PCS", nullable: true, precision: 6, scale: 0 })
  estPcs: number | null;

  @Column("number", { name: "EST_WT", nullable: true, precision: 12, scale: 3 })
  estWt: number | null;

  @Column("number", {
    name: "EST_AMT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  estAmt: number | null;

  @Column("number", { name: "TOT_PCS", nullable: true, precision: 6, scale: 0 })
  totPcs: number | null;

  @Column("number", { name: "TOT_WT", nullable: true, precision: 12, scale: 3 })
  totWt: number | null;

  @Column("number", {
    name: "TOT_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  totAmt: number | null;

  @Column("number", { name: "OTH_PCS", nullable: true, precision: 6, scale: 0 })
  othPcs: number | null;

  @Column("number", { name: "OTH_WT", nullable: true, precision: 12, scale: 3 })
  othWt: number | null;

  @Column("number", { name: "ISS_PCS", nullable: true, precision: 6, scale: 0 })
  issPcs: number | null;

  @Column("number", { name: "ISS_WT", nullable: true, precision: 12, scale: 3 })
  issWt: number | null;

  @Column("number", {
    name: "ISS_TOTPCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  issTotpcs: number | null;

  @Column("number", {
    name: "ISS_TOTWT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  issTotwt: number | null;

  @Column("number", { name: "SUS_PCS", nullable: true, precision: 6, scale: 0 })
  susPcs: number | null;

  @Column("number", { name: "SUS_WT", nullable: true, precision: 12, scale: 3 })
  susWt: number | null;

  @Column("number", {
    name: "SUS_TOTPCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  susTotpcs: number | null;

  @Column("number", {
    name: "SUS_TOTWT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  susTotwt: number | null;

  @Column("number", {
    name: "ALTTAGFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  alttagfk: number | null;

  @Column("number", { name: "CTR_PCS", nullable: true, precision: 6, scale: 0 })
  ctrPcs: number | null;

  @Column("number", { name: "CTR_WT", nullable: true, precision: 12, scale: 3 })
  ctrWt: number | null;

  @Column("number", {
    name: "CTR_TOTPCS",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ctrTotpcs: number | null;

  @Column("number", {
    name: "CTR_TOTWT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ctrTotwt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
