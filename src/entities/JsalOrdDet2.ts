import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasProduct } from "./JmasProduct";

@Index("ORDER_DET2PK", ["orderDet2Pk"], { unique: true })
@Entity("JSAL_ORD_DET2")
export class JsalOrdDet2 {
  @Column("number", {
    primary: true,
    name: "ORDER_DET2PK",
    precision: 8,
    scale: 0,
  })
  orderDet2Pk: number;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "DISCOUNT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  discount: number | null;

  @Column("number", {
    name: "PLUS",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  plus: number | null;

  @Column("number", { name: "ALLOY", nullable: true, precision: 8, scale: 3 })
  alloy: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("date", { name: "RECDATE", nullable: true })
  recdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalOrdDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => JsalOrdDet2, (jsalOrdDet2) => jsalOrdDet2.jsalOrdDets)
  @JoinColumn([{ name: "SAL_ORDERFK", referencedColumnName: "orderDet2Pk" }])
  salOrderfk: JsalOrdDet2;

  @OneToMany(() => JsalOrdDet2, (jsalOrdDet2) => jsalOrdDet2.salOrderfk)
  jsalOrdDets: JsalOrdDet2[];
}
