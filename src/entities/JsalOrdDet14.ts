import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasCharges } from "./JmasCharges";
import { JsalOrdDet1 } from "./JsalOrdDet1";

@Index("SYS_C002731", ["orderDet14Pk"], { unique: true })
@Entity("JSAL_ORD_DET14")
export class JsalOrdDet14 {
  //DB_ERROR -> PK
  @Column("number", {
    primary: true,
    name: "ORDER_DET14PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet14Pk: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 30 })
  typeDesc: string | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  addRateAmt: number | null;

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

  @Column("varchar2", { name: "HUIDNO", nullable: true, length: 15 })
  huidno: string | null;

  @ManyToOne(() => JmasCharges, (jmasCharges) => jmasCharges.jsalOrdDets)
  @JoinColumn([{ name: "CHRGFK", referencedColumnName: "chrgpk" }])
  chrgfk: JmasCharges;

  @ManyToOne(() => JsalOrdDet1, (jsalOrdDet1) => jsalOrdDet1.jsalOrdDets2)
  @JoinColumn([{ name: "ORDER_DET1FK", referencedColumnName: "orderDet1Pk" }])
  orderDet1Fk: JsalOrdDet1;
}
