import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasSalestype } from "./MasSalestype";
import { MasGeneral } from "./MasGeneral";
import { MasTax } from "./MasTax";
import { JpurTran } from "./JpurTran";
import { JsalCrn } from "./JsalCrn";
import { ObGsstk } from "./ObGsstk";

@Index("COMPGSSTK", ["companyfk"], {})
@Index("GSSTKPK", ["gsstkpk"], { unique: true })
@Entity("JMAS_GSSTK")
export class JmasGsstk {
  @Column("number", { primary: true, name: "GSSTKPK", precision: 6, scale: 0 })
  gsstkpk: number;

  @Column("char", { name: "GS1112", nullable: true, length: 2 })
  gs1112: string | null;

  @Column("varchar2", { name: "GSDESC", nullable: true, length: 40 })
  gsdesc: string | null;

  @Column("char", { name: "TRAN_TYPE", nullable: true, length: 5 })
  tranType: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "OPSTK_WT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkWt: number | null;

  @Column("number", {
    name: "OPSTK_PCS",
    nullable: true,
    precision: 7,
    scale: 1,
  })
  opstkPcs: number | null;

  @Column("number", {
    name: "OPSTK_VAL",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  opstkVal: number | null;

  @Column("number", {
    name: "OPSTK_AVERATE",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  opstkAverate: number | null;

  @Column("number", {
    name: "WAST_WT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  wastWt: number | null;

  @Column("number", {
    name: "ISSDOCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  issdocfk: number | null;

  @Column("varchar2", { name: "REC_TYPEDESC", nullable: true, length: 30 })
  recTypedesc: string | null;

  @Column("varchar2", { name: "ISS_TYPEDESC", nullable: true, length: 30 })
  issTypedesc: string | null;

  @Column("char", {
    name: "GSDP",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  gsdp: string | null;

  @Column("char", { name: "PROD_CAT", nullable: true, length: 2 })
  prodCat: string | null;

  @Column("char", { name: "AVE_RATE_IND", nullable: true, length: 1 })
  aveRateInd: string | null;

  @Column("char", { name: "MFG_STOCK", nullable: true, length: 1 })
  mfgStock: string | null;

  @Column("char", { name: "STOCK_TYPE", nullable: true, length: 1 })
  stockType: string | null;

  @Column("char", { name: "UOM_IND", nullable: true, length: 1 })
  uomInd: string | null;

  @Column("number", {
    name: "TEMPAVGRATE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  tempavgrate: number | null;

  @Column("number", {
    name: "CON_GSSTKFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  conGsstkfk: number | null;

  @Column("char", { name: "GSDB", nullable: true, length: 1 })
  gsdb: string | null;

  @Column("number", {
    name: "OPSTK_NWT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkNwt: number | null;

  @Column("number", {
    name: "OPSTK_VAL_NWT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  opstkValNwt: number | null;

  @Column("number", {
    name: "OPSTK_CARAT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkCarat: number | null;

  @Column("number", {
    name: "RECDOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  recdocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "COMMODITY", nullable: true, length: 5 })
  commodity: string | null;

  @Column("char", { name: "CATEGORY", nullable: true, length: 1 })
  category: string | null;

  @Column("number", {
    name: "SUS_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  susAccfk: number | null;

  @Column("number", {
    name: "REFGSSTKPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refgsstkpk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks)
  @JoinColumn([{ name: "CLSTK_ACCFK", referencedColumnName: "accpk" }])
  clstkAccfk: MasAccounts;

  @ManyToOne(() => MasSalestype, (masSalestype) => masSalestype.jmasGsstks)
  @JoinColumn([{ name: "ISS_TYPEFK", referencedColumnName: "salestypepk" }])
  issTypefk: MasSalestype;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks2)
  @JoinColumn([{ name: "OPSTK_ACCFK", referencedColumnName: "accpk" }])
  opstkAccfk: MasAccounts;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks3)
  @JoinColumn([{ name: "PUR_ACCFK", referencedColumnName: "accpk" }])
  purAccfk: MasAccounts;

  @ManyToOne(() => MasGeneral, (masGeneral) => masGeneral.jmasGsstks)
  @JoinColumn([{ name: "REC_TYPEFK", referencedColumnName: "masGenpk" }])
  recTypefk: MasGeneral;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks4)
  @JoinColumn([{ name: "SAL_ACCFK", referencedColumnName: "accpk" }])
  salAccfk: MasAccounts;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks5)
  @JoinColumn([{ name: "PUR_RET_ACCFK", referencedColumnName: "accpk" }])
  purRetAccfk: MasAccounts;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.jmasGsstks6)
  @JoinColumn([{ name: "SAL_RET_ACCFK", referencedColumnName: "accpk" }])
  salRetAccfk: MasAccounts;

  @ManyToOne(() => MasTax, (masTax) => masTax.jmasGsstks)
  @JoinColumn([{ name: "TAXFK", referencedColumnName: "taxpk" }])
  taxfk: MasTax;

  @OneToMany(() => JpurTran, (jpurTran) => jpurTran.gsstkfk)
  jpurTrans: JpurTran[];

  @OneToMany(() => JsalCrn, (jsalCrn) => jsalCrn.gsstkfk)
  jsalCrns: JsalCrn[];

  @OneToMany(() => ObGsstk, (obGsstk) => obGsstk.gsstkfk2)
  obGsstks: ObGsstk[];
}
