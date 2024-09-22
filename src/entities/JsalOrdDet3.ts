import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { JsalOrder } from "./JsalOrder";

@Index("JSAL_ORD_DET3_ORDER_DET3PK", ["orderDet3Pk"], { unique: true })
@Entity("JSAL_ORD_DET3")
export class JsalOrdDet3 {
  @Column("number", {
    primary: true,
    name: "ORDER_DET3PK",
    precision: 8,
    scale: 0,
  })
  orderDet3Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 40 })
  typeDesc: string | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jsalOrdDets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => JsalOrder, (jsalOrder) => jsalOrder.jsalOrdDets2)
  @JoinColumn([{ name: "SAL_ORDERFK", referencedColumnName: "salOrderpk" }])
  salOrderfk: JsalOrder;
}
