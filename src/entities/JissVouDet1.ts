import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasProduct } from "./JmasProduct";
import { JissVou } from "./JissVou";
import { JissVouDet11 } from "./JissVouDet11";
import { JrecVouDet1 } from "./JrecVouDet1";

@Index("ISS_VOU_DET1PK", ["issVouDet1Pk"], { unique: true })
@Entity("JISS_VOU_DET1")
export class JissVouDet1 {
  @Column("number", {
    primary: true,
    name: "ISS_VOU_DET1PK",
    precision: 8,
    scale: 0,
  })
  issVouDet1Pk: number;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 8, scale: 0 })
  pcs: number | null;

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

  @Column("char", {
    name: "SMITH_STOCK",
    nullable: true,
    length: 1,
    default: () => "'Y'",
  })
  smithStock: string | null;

  @Column("number", {
    name: "REC_GSSTFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  recGsstfk: number | null;

  @Column("number", {
    name: "CUR_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  curRate: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "HOME_FLAG", nullable: true, length: 1 })
  homeFlag: string | null;

  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("number", {
    name: "ORDER_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderDet1Fk: number | null;

  @Column("number", {
    name: "REC_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recVoufk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "KARAT", nullable: true, precision: 8, scale: 3 })
  karat: number | null;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.jissVouDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk: JmasProduct;

  @ManyToOne(() => JissVou, (jissVou) => jissVou.jissVouDets)
  @JoinColumn([{ name: "ISS_VOUFK", referencedColumnName: "issVoupk" }])
  issVoufk: JissVou;

  @OneToMany(() => JissVouDet11, (jissVouDet11) => jissVouDet11.issVouDet1Fk)
  jissVouDets: JissVouDet11[];

  @OneToMany(() => JrecVouDet1, (jrecVouDet1) => jrecVouDet1.issVouDet1Fk)
  jrecVouDets: JrecVouDet1[];
}
