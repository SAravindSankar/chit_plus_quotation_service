import { Column, Entity, Index } from "typeorm";

@Index("SYS_C0026098", ["tgrGrnDet1Pk"], { unique: true })
@Entity("TGR_GRN_DET1")
export class TgrGrnDet1 {
  @Column("number", {
    primary: true,
    name: "TGR_GRN_DET1PK",
    precision: 8,
    scale: 0,
  })
  tgrGrnDet1Pk: number;

  @Column("number", {
    name: "TGR_GRNFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrGrnfk: number | null;

  @Column("number", {
    name: "TPUR_POFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tpurPofk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "BILL_QTY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  billQty: number | null;

  @Column("number", { name: "TF_QTY", nullable: true, precision: 8, scale: 3 })
  tfQty: number | null;

  @Column("number", { name: "CF_QTY", nullable: true, precision: 8, scale: 3 })
  cfQty: number | null;

  @Column("number", {
    name: "RECD_QTY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  recdQty: number | null;

  @Column("number", { name: "ACC_QTY", nullable: true, precision: 8, scale: 3 })
  accQty: number | null;

  @Column("number", { name: "REJ_QTY", nullable: true, precision: 8, scale: 3 })
  rejQty: number | null;

  @Column("number", {
    name: "WASTE_QTY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  wasteQty: number | null;

  @Column("number", {
    name: "RETD_QTY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  retdQty: number | null;

  @Column("number", { name: "DBN_QTY", nullable: true, precision: 8, scale: 3 })
  dbnQty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", { name: "BA_AMT", nullable: true, precision: 10, scale: 2 })
  baAmt: number | null;

  @Column("number", { name: "WA_AMT", nullable: true, precision: 10, scale: 2 })
  waAmt: number | null;

  @Column("number", {
    name: "WASTE_APPAMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  wasteAppamt: number | null;

  @Column("number", {
    name: "LAND_COST",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  landCost: number | null;

  @Column("number", { name: "MRP", nullable: true, precision: 10, scale: 2 })
  mrp: number | null;

  @Column("number", {
    name: "MAS_MARGIN_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  masMarginPer: number | null;

  @Column("number", {
    name: "CALC_SALE_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  calcSaleRate: number | null;

  @Column("number", {
    name: "ACT_SALE_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  actSaleRate: number | null;

  @Column("number", {
    name: "ACT_MARGIN_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  actMarginPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  lessPer: number | null;

  @Column("number", {
    name: "ADD_PER",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  addPer: number | null;

  @Column("number", {
    name: "DOC_REFFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  docReffk: number | null;

  @Column("number", {
    name: "BATCH_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  batchNo: number | null;

  @Column("number", {
    name: "DOC_REFNO",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  docRefno: number | null;

  @Column("number", {
    name: "BILLED_QTY",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  billedQty: number | null;

  @Column("number", {
    name: "DOC_REF_DETFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  docRefDetfk: number | null;

  @Column("number", {
    name: "DOC_REF_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  docRefDocfk: number | null;
}
