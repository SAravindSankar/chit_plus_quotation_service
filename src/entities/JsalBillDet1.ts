import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasProduct } from "./JmasProduct";
import { JsalBill } from "./JsalBill";
import { MasEmp } from "./MasEmp";
import { JsalBillDet11 } from "./JsalBillDet11";
import { JsalBillDet12 } from "./JsalBillDet12";
import { JsalBillDet13 } from "./JsalBillDet13";
import { JsalCrnDet1 } from "./JsalCrnDet1";

@Index("BDETP", ["prodfk", "delflag", "salBillfk"], {})
@Index("BDETTAG", ["prodfk", "delflag", "salBillfk", "tagfk"], {})
@Index("BDETWP", ["wt", "pcs"], {})
@Index("BILLDET1SALMAN", ["salMan"], {})
@Index("BILLDETP", ["prodfk", "salBillfk", "delflag"], {})
@Index("COUNTERBILLDETHOM", ["homeFlag"], {})
@Index("DAYEND2", ["prodfk", "salBillfk"], {})
@Index("GSSTKPROD", ["gsstkfk"], {})
@Index("JBILL_DET1PK", ["billDet1Pk"], { unique: true })
@Index("OLD_CODE", ["oldProdCd", "oldSubCd"], {})
@Index("SALDET1", ["salBillfk"], {})
@Index("TAB_PK$TAGFK", ["salBillfk", "tagfk"], {})
@Index("TAGBILL", ["tagfk"], {})
@Index("THANGAST4", ["billDet1Pk", "salBillfk", "tagfk", "delflag"], {})
@Entity("JSAL_BILL_DET1")
export class JsalBillDet1 {
  @Column("number", {
    primary: true,
    name: "SAL_BILLFK",
    precision: 8,
    scale: 0,
  })
  salBillfk: number;

  @Column("number", {
    name: "JSAL_REFFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jsalReffk: number | null;

  @Column("number", { primary: true, name: "TAGFK", precision: 8, scale: 0 })
  tagfk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "PCS", nullable: true, precision: 8, scale: 3 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", { name: "SAL_MAN", nullable: true, precision: 6, scale: 0 })
  salMan: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", {
    primary: true,
    name: "BILL_DET1PK",
    precision: 8,
    scale: 0,
  })
  billDet1Pk: number;

  @Column("number", {
    name: "CURR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  currRate: number | null;

  @Column("number", { name: "MC_PER", nullable: true, precision: 5, scale: 2 })
  mcPer: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("number", { name: "WC_PER", nullable: true, precision: 5, scale: 2 })
  wcPer: number | null;

  @Column("number", { name: "WC_WT", nullable: true, precision: 8, scale: 3 })
  wcWt: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 5 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 5 })
  oldSubCd: string | null;

  @Column("number", {
    name: "QUO_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  quoAmt: number | null;

  @Column("number", {
    name: "LESS_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  lessPer: number | null;

  @Column("number", { name: "LESS_WT", nullable: true, precision: 8, scale: 3 })
  lessWt: number | null;

  @Column("number", { name: "NET_WT", nullable: true, precision: 8, scale: 3 })
  netWt: number | null;

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
    name: "RATE_ADD_PER",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  rateAddPer: number | null;

  @Column("number", {
    name: "ADD_AMT",
    nullable: true,
    precision: 5,
    scale: 2,
    default: () => "0",
  })
  addAmt: number | null;

  @Column("number", {
    name: "GWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  gwt: number | null;

  @Column("number", {
    name: "NWT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  nwt: number | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("number", { name: "TEMPWT", nullable: true, precision: 8, scale: 3 })
  tempwt: number | null;

  @Column("number", {
    name: "TEMPPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tempprodfk: number | null;

  @Column("number", { name: "NONTAG", nullable: true, precision: 8, scale: 0 })
  nontag: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
    default: () => "0",
  })
  purDet1Fk: number | null;

  @Column("char", { name: "INV_FLAG", nullable: true, length: 1 })
  invFlag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "VA_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  vaValue: number | null;

  @Column("number", {
    name: "STONE_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  stoneValue: number | null;

  @Column("number", {
    name: "METAL_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  metalValue: number | null;

  @Column("number", {
    name: "DIFF_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  diffAmt: number | null;

  @Column("number", {
    name: "REF_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  refDocfk: number | null;

  @Column("number", {
    name: "REF_TRAN_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  refTranDocfk: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalBillDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk2: JmasProduct;

  @ManyToOne(() => JsalBill, (jsalBill) => jsalBill.jsalBillDets)
  @JoinColumn([{ name: "SAL_BILLFK", referencedColumnName: "salBillpk" }])
  salBillfk2: JsalBill;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.jsalBillDets)
  @JoinColumn([{ name: "SAL_MAN", referencedColumnName: "emppk" }])
  salMan2: MasEmp;

  @OneToMany(() => JsalBillDet11, (jsalBillDet11) => jsalBillDet11.billDet1Fk2)
  jsalBillDets: JsalBillDet11[];

  @OneToMany(() => JsalBillDet12, (jsalBillDet12) => jsalBillDet12.billDet1Fk)
  jsalBillDets2: JsalBillDet12[];

  @OneToMany(() => JsalBillDet13, (jsalBillDet13) => jsalBillDet13.billDet1Fk)
  jsalBillDets3: JsalBillDet13[];

  @OneToMany(() => JsalCrnDet1, (jsalCrnDet1) => jsalCrnDet1.billDet1Fk)
  jsalCrnDets: JsalCrnDet1[];
}
