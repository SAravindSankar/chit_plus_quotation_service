import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JrecVou } from "./JrecVou";
import { JmasProduct } from "./JmasProduct";
import { JissVouDet1 } from "./JissVouDet1";
import { JrecVouDet11 } from "./JrecVouDet11";

@Index("REC_VOU_DET1PK", ["recVouDet1Pk"], { unique: true })
@Entity("JREC_VOU_DET1")
export class JrecVouDet1 {
  @Column("number", {
    primary: true,
    name: "REC_VOU_DET1PK",
    precision: 8,
    scale: 0,
  })
  recVouDet1Pk: number;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 12, scale: 2 })
  mcAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "OLD_PROD_CD", nullable: true, length: 3 })
  oldProdCd: string | null;

  @Column("char", { name: "OLD_SUB_CD", nullable: true, length: 3 })
  oldSubCd: string | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 6, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "KARAT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  karat: number | null;

  @Column("char", {
    name: "SMITH_STOCK",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  smithStock: string | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", {
    name: "CUR_RATE",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  curRate: number | null;

  @Column("number", { name: "TAG_PCS", nullable: true, precision: 5, scale: 0 })
  tagPcs: number | null;

  @Column("number", { name: "TAG_WT", nullable: true, precision: 10, scale: 3 })
  tagWt: number | null;

  @Column("number", {
    name: "TAG_CARAT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  tagCarat: number | null;

  @Column("char", { name: "COMPLETED", nullable: true, length: 1 })
  completed: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 40 })
  remarks: string | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

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

  @ManyToOne(() => JrecVou, (jrecVou) => jrecVou.jrecVouDets)
  @JoinColumn([{ name: "REC_VOUFK", referencedColumnName: "recVoupk" }])
  recVoufk: JrecVou;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jrecVouDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => JissVouDet1, (jissVouDet1) => jissVouDet1.jrecVouDets)
  @JoinColumn([
    { name: "ISS_VOU_DET1FK", referencedColumnName: "issVouDet1Pk" },
  ])
  issVouDet1Fk: JissVouDet1;

  @OneToMany(() => JrecVouDet11, (jrecVouDet11) => jrecVouDet11.recVouDet1Fk)
  jrecVouDets: JrecVouDet11[];
}
