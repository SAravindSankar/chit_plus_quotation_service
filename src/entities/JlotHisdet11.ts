import { Column, Entity } from "typeorm";

@Entity("JLOT_HISDET11")
export class JlotHisdet11 {
  @Column("number", {
    name: "LOT_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  lotDet11Pk: number | null;

  @Column("number", {
    name: "LOT_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  lotDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("varchar2", { name: "KARROT", nullable: true, length: 6 })
  karrot: string | null;

  @Column("number", { name: "CARAT", nullable: true, precision: 8, scale: 3 })
  carat: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "PRE_CARAT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  preCarat: number | null;

  @Column("varchar2", { name: "PCODE", nullable: true, length: 10 })
  pcode: string | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("char", { name: "UPD_FLAG", nullable: true, length: 1 })
  updFlag: string | null;

  @Column("char", { name: "TMJ", nullable: true, length: 1 })
  tmj: string | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  discPer: number | null;

  @Column("number", {
    name: "DISC_AMOUNT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discAmount: number | null;

  @Column("varchar2", { name: "OLD_DESC", nullable: true, length: 10 })
  oldDesc: string | null;
}
