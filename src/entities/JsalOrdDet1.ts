import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JsalOrder } from "./JsalOrder";
import { MasDoc } from "./MasDoc";
import { JsalOrdDet12 } from "./JsalOrdDet12";
import { JsalOrdDet14 } from "./JsalOrdDet14";

@Index("JORDER_DET1PK", ["orderDet1Pk"], { unique: true })
@Entity("JSAL_ORD_DET1")
export class JsalOrdDet1 {
  @Column("number", {
    primary: true,
    name: "ORDER_DET1PK",
    precision: 8,
    scale: 0,
  })
  orderDet1Pk: number;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "NO_OF_STONES",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  noOfStones: number | null;

  @Column("number", {
    name: "MIN_MC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  minMcPer: number | null;

  @Column("number", {
    name: "MIN_MC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  minMcAmt: number | null;

  @Column("number", {
    name: "MAX_MC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  maxMcPer: number | null;

  @Column("number", {
    name: "MAX_MC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  maxMcAmt: number | null;

  @Column("number", {
    name: "MIN_WC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  minWcPer: number | null;

  @Column("number", {
    name: "MIN_WC_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  minWcWt: number | null;

  @Column("number", {
    name: "MAX_WC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  maxWcPer: number | null;

  @Column("number", {
    name: "MAX_WC_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  maxWcWt: number | null;

  @Column("number", {
    name: "JSAL_BILL_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jsalBillDet1Fk: number | null;

  @Column("number", {
    name: "JISS_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jissVouDet1Fk: number | null;

  @Column("number", {
    name: "JREC_VOU_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jrecVouDet1Fk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("char", { name: "ORD_STA", nullable: true, length: 1 })
  ordSta: string | null;

  @Column("varchar2", { name: "DISCRIP", nullable: true, length: 30 })
  discrip: string | null;

  @Column("date", { name: "ISS_DATE", nullable: true })
  issDate: Date | null;

  @Column("date", { name: "REC_DATE", nullable: true })
  recDate: Date | null;

  @Column("date", { name: "BILL_DATE", nullable: true })
  billDate: Date | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", {
    name: "MIN_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  minMcPercent: number | null;

  @Column("number", {
    name: "MAX_MC_PERCENT",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  maxMcPercent: number | null;

  @Column("number", {
    name: "MIN_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  minWcAmt: number | null;

  @Column("number", {
    name: "MAX_WC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
    default: () => "0",
  })
  maxWcAmt: number | null;

  @Column("number", {
    name: "AWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  awt: number | null;

  @Column("number", {
    name: "DISCOUNT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  discount: number | null;

  @Column("number", {
    name: "JISS_REC_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jissRecDetfk: number | null;

  @Column("number", {
    name: "ORD_FROM_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  ordFromWt: number | null;

  @Column("number", {
    name: "ORD_TO_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  ordToWt: number | null;

  @Column("number", {
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  rateAddPer: number | null;

  @Column("number", {
    name: "ISS_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issDocfk: number | null;

  @Column("number", { name: "RECWT", nullable: true, precision: 10, scale: 3 })
  recwt: number | null;

  @Column("number", { name: "DOCNO", nullable: true, precision: 8, scale: 0 })
  docno: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "ISS_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  issVoufk: number | null;

  @ManyToOne(() => JsalOrder, (jsalOrder) => jsalOrder.jsalOrdDets)
  @JoinColumn([{ name: "SAL_ORDERFK", referencedColumnName: "salOrderpk" }])
  salOrderfk: JsalOrder;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.jsalOrdDets)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;

  @OneToMany(() => JsalOrdDet12, (jsalOrdDet12) => jsalOrdDet12.orderDet1Fk)
  jsalOrdDets: JsalOrdDet12[];

  @OneToMany(() => JsalOrdDet14, (jsalOrdDet14) => jsalOrdDet14.orderDet1Fk)
  jsalOrdDets2: JsalOrdDet14[];
}
