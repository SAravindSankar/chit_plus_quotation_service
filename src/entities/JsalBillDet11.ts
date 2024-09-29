import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JmasProduct } from "./JmasProduct";

@Index("JBILL_DET11PK", ["billDet11Pk"], { unique: true })
@Index("STWTIND", ["delflag", "prodfk", "billDet1Fk", "carat", "weight"], {})
@Entity("JSAL_BILL_DET11")
export class JsalBillDet11 {
  @Column("number", {
    primary: true,
    name: "BILL_DET11PK",
    precision: 8,
    scale: 0,
  })
  billDet11Pk: number;

  @Column("number", { name: "BILL_DET1FK", precision: 8, scale: 0 })
  billDet1Fk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 8, scale: 3 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "CARAT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  carat: number | null;

  @Column("number", {
    name: "WEIGHT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  weight: number | null;

  @Column("number", {
    name: "TAG_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  tagRate: number | null;

  @Column("number", {
    name: "TAG_AMOUNT",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  tagAmount: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.jsalBillDets)
  @JoinColumn([{ name: "BILL_DET1FK", referencedColumnName: "billDet1Pk" }])
  billDet1Fk2: JsalBillDet1;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalBillDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk2: JmasProduct;
}
