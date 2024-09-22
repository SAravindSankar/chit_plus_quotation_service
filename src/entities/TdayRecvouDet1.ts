import { Column, Entity } from "typeorm";

@Entity("TDAY_RECVOU_DET1")
export class TdayRecvouDet1 {
  @Column("number", {
    name: "REC_VOU_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVouDet1Pk: number | null;

  @Column("number", {
    name: "REC_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVoufk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "ISS_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVouDet1Fk: number | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 6, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", { name: "KARAT", nullable: true, precision: 8, scale: 3 })
  karat: number | null;

  @Column("char", { name: "SMITH_STOCK", nullable: true, length: 1 })
  smithStock: string | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", {
    name: "CUR_RATE",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  curRate: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
