import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalOrdDet1 } from "./JsalOrdDet1";

@Index("JORDER_DET12PK", ["orderDet12Pk"], { unique: true })
@Entity("JSAL_ORD_DET12")
export class JsalOrdDet12 {
  @Column("number", {
    primary: true,
    name: "ORDER_DET12PK",
    precision: 8,
    scale: 0,
  })
  orderDet12Pk: number;

  @Column("varchar2", { name: "PROD_SPEC", nullable: true, length: 100 })
  prodSpec: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "MSIZE", nullable: true, length: 20 })
  msize: string | null;

  @Column("number", {
    name: "PRODSPECFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  prodspecfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalOrdDet1, (jsalOrdDet1) => jsalOrdDet1.jsalOrdDets)
  @JoinColumn([{ name: "ORDER_DET1FK", referencedColumnName: "orderDet1Pk" }])
  orderDet1Fk: JsalOrdDet1;
}
