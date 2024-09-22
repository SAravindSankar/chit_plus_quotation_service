import { Column, Entity } from "typeorm";

@Entity("TSER_BILL_DET1")
export class TserBillDet1 {
  @Column("number", {
    name: "TSER_BILL_DET1PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tserBillDet1Pk: number | null;

  @Column("number", {
    name: "TSER_BILLFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tserBillfk: number | null;

  @Column("number", { name: "PRODPK", nullable: true, precision: 10, scale: 0 })
  prodpk: number | null;

  @Column("number", {
    name: "SPARES_VALUE",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  sparesValue: number | null;

  @Column("number", { name: "ST_AMT", nullable: true, precision: 10, scale: 2 })
  stAmt: number | null;

  @Column("number", {
    name: "LABOUR_CHRGS",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  labourChrgs: number | null;

  @Column("number", {
    name: "TOTAL_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  totalAmt: number | null;

  @Column("number", {
    name: "TSER_CAF_DETPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tserCafDetpk: number | null;

  @Column("number", {
    name: "CHARGES",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  charges: number | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", {
    name: "BILL_DET1PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  billDet1Pk: number | null;

  @Column("number", { name: "BILLFK", nullable: true, precision: 10, scale: 0 })
  billfk: number | null;

  @Column("varchar2", { name: "PROD_LAB", nullable: true, length: 1 })
  prodLab: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 10, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 10, scale: 3 })
  qty: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "OTH_ADD",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "OTH_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othValue: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;
}
