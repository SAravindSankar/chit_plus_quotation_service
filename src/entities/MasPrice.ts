import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { JmasProduct } from "./JmasProduct";

@Entity("MAS_PRICE")
export class MasPrice {
  //DB_ERROR -> PK
  @Column("number", {
    name: "PRICEPK",
    nullable: true,
    precision: 6,
    scale: 0,
    primary: true,
  })
  pricepk: number | null;

  @Column("number", {
    name: "LIST_PRICE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  listPrice: number | null;

  @Column("number", {
    name: "STD_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  stdDisc: number | null;

  @Column("number", {
    name: "PUR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  purRate: number | null;

  @Column("number", {
    name: "PUR_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  purDisc: number | null;

  @Column("number", {
    name: "DLR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  dlrRate: number | null;

  @Column("number", {
    name: "DLR_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  dlrDisc: number | null;

  @Column("number", {
    name: "SALE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  saleRate: number | null;

  @Column("number", { name: "MRP", nullable: true, precision: 8, scale: 2 })
  mrp: number | null;

  @Column("number", {
    name: "ELIST_PRICE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  elistPrice: number | null;

  @Column("number", {
    name: "ESTD_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  estdDisc: number | null;

  @Column("number", {
    name: "EPUR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  epurRate: number | null;

  @Column("number", {
    name: "EPUR_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  epurDisc: number | null;

  @Column("number", {
    name: "EDLR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  edlrRate: number | null;

  @Column("number", {
    name: "EDLR_DISC",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  edlrDisc: number | null;

  @Column("number", {
    name: "ESALE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  esaleRate: number | null;

  @Column("number", { name: "EMRP", nullable: true, precision: 8, scale: 2 })
  emrp: number | null;

  @Column("number", { name: "MAR_PER", nullable: true, precision: 5, scale: 2 })
  marPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masPrices)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.masPrices)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
