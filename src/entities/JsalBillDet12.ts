import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JmasProduct } from "./JmasProduct";

@Index("JBILL_DET12PK", ["billDet12Pk"], { unique: true })
@Entity("JSAL_BILL_DET12")
export class JsalBillDet12 {
  @Column("number", {
    primary: true,
    name: "BILL_DET12PK",
    precision: 8,
    scale: 0,
  })
  billDet12Pk: number;

  @Column("char", { name: "LOT", nullable: true, length: 2 })
  lot: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "PER", nullable: true, precision: 6, scale: 2 })
  per: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "SCH_TYPE", nullable: true, length: 1 })
  schType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.jsalBillDets2)
  @JoinColumn([{ name: "BILL_DET1FK", referencedColumnName: "billDet1Pk" }])
  billDet1Fk: JsalBillDet1;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalBillDets3)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;
}
