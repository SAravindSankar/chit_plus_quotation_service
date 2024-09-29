import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasProduct } from "./JmasProduct";

@Index("JORDER_DET11PK", ["orderDet11Pk"], { unique: true })
@Entity("JSAL_ORD_DET11")
export class JsalOrdDet11 {
  @Column("number", {
    primary: true,
    name: "ORDER_DET11PK",
    precision: 8,
    scale: 0,
  })
  orderDet11Pk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "CARAT", nullable: true, precision: 8, scale: 3 })
  carat: number | null;

  @Column("number", {
    name: "ADD_WEIGHT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  addWeight: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

  @Column("number", {
    name: "ORDER_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalOrdDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => JsalOrdDet11, (jsalOrdDet11) => jsalOrdDet11.jsalOrdDets)
  @JoinColumn([{ name: "ORDER_DET1FKK", referencedColumnName: "orderDet11Pk" }])
  orderDet1Fkk: JsalOrdDet11;

  @OneToMany(() => JsalOrdDet11, (jsalOrdDet11) => jsalOrdDet11.orderDet1Fkk)
  jsalOrdDets: JsalOrdDet11[];
}
