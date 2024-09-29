import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JsalBillDet1 } from "./JsalBillDet1";
import { JsalCrn } from "./JsalCrn";
import { JmasProduct } from "./JmasProduct";
import { JsalCrnDet11 } from "./JsalCrnDet11";
import { JsalCrnDet12 } from "./JsalCrnDet12";

@Index("CRN_DET1PK", ["crnDet1Pk"], { unique: true })
@Entity("JSAL_CRN_DET1")
export class JsalCrnDet1 {
  @Column("number", {
    primary: true,
    name: "CRN_DET1PK",
    precision: 8,
    scale: 0,
  })
  crnDet1Pk: number;

  @Column("number", { name: "PCS", nullable: true, precision: 4, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalBillDet1, (jsalBillDet1) => jsalBillDet1.jsalCrnDets)
  @JoinColumn([{ name: "BILL_DET1FK", referencedColumnName: "billDet1Pk" }])
  billDet1Fk: JsalBillDet1;

  @ManyToOne(() => JsalCrn, (jsalCrn) => jsalCrn.jsalCrnDets)
  @JoinColumn([{ name: "CRNFK", referencedColumnName: "crnpk" }])
  crnfk: JsalCrn;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jsalCrnDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @OneToMany(() => JsalCrnDet11, (jsalCrnDet11) => jsalCrnDet11.crnDet1Fk)
  jsalCrnDets: JsalCrnDet11[];

  @OneToMany(() => JsalCrnDet12, (jsalCrnDet12) => jsalCrnDet12.crnDet1Fk)
  jsalCrnDets2: JsalCrnDet12[];
}
