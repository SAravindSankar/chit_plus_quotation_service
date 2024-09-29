import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalQuoDet1 } from "./JsalQuoDet1";
import { JmasProduct } from "./JmasProduct";

@Index("JQUO_DET11PK", ["quoDet11Pk"], { unique: true })
@Entity("JSAL_QUO_DET11")
export class JsalQuoDet11 {
  @Column("number", {
    primary: true,
    name: "QUO_DET11PK",
    precision: 8,
    scale: 0,
  })
  quoDet11Pk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", {
    name: "PCS",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  pcs: number | null;

  @Column("char", {
    name: "KARROT",
    nullable: true,
    length: 5,
    default: () => "0",
  })
  karrot: string | null;

  @Column("number", {
    name: "AMOUNT",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  amount: number | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "RATE",
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => "0",
  })
  rate: number | null;

  @Column("number", {
    name: "QTY",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  qty: number | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalQuoDet1, (jsalQuoDet1) => jsalQuoDet1.jsalQuoDets)
  @JoinColumn([{ name: "QUO_DET1FK", referencedColumnName: "quoDet1Pk" }])
  quoDet1Fk: JsalQuoDet1;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalQuoDets2)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
