import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AccCha } from "./AccCha";
import { AccCrndbnDet } from "./AccCrndbnDet";
import { ChitColl } from "./ChitColl";
import { ChitGrp } from "./ChitGrp";
import { ChitMembers } from "./ChitMembers";
import { DocAppDet12 } from "./DocAppDet12";
import { JaccVou } from "./JaccVou";
import { JmasGsstk } from "./JmasGsstk";
import { JmasProdChrg } from "./JmasProdChrg";
import { JpurBrMode } from "./JpurBrMode";
import { JpurDet12 } from "./JpurDet12";
import { JpurDet2 } from "./JpurDet2";
import { JrecVouDet2 } from "./JrecVouDet2";
import { JsalBillDet14 } from "./JsalBillDet14";
import { JsalBillDet2 } from "./JsalBillDet2";
import { JsalCrnDet11 } from "./JsalCrnDet11";
import { JsalCrnDet2 } from "./JsalCrnDet2";
import { JsalOrdDet3 } from "./JsalOrdDet3";
import { JsalQuoDet12 } from "./JsalQuoDet12";
import { JsalQuoDet2 } from "./JsalQuoDet2";
import { MasCompany } from "./MasCompany";
import { MasBank } from "./MasBank";
import { MasBillAcc } from "./MasBillAcc";
import { MasCcard } from "./MasCcard";
import { MasChqinv } from "./MasChqinv";
import { MasFixedassets } from "./MasFixedassets";
import { MasGeneral } from "./MasGeneral";
import { MasGiftvou } from "./MasGiftvou";
import { MasGlsl } from "./MasGlsl";
import { MasSalestype } from "./MasSalestype";
import { MbillDet } from "./MbillDet";

@Index("ACCPK", ["accpk"], { unique: true })
@Entity("MAS_ACCOUNTS")
export class MasAccounts {
  @Column("number", { primary: true, name: "ACCPK", precision: 8, scale: 0 })
  accpk: number;

  @Column("char", { name: "ACCODE", unique: true, length: 4 })
  accode: string;

  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("char", { name: "SCH_NO", nullable: true, length: 2 })
  schNo: string | null;

  @Column("number", {
    name: "OP_BAL",
    nullable: true,
    precision: 12,
    scale: 2,
    default: () => "0",
  })
  opBal: number | null;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "GL_FLG", nullable: true, length: 1 })
  glFlg: string | null;

  @Column("char", { name: "TB_FLG", nullable: true, length: 1 })
  tbFlg: string | null;

  @Column("char", { name: "PL_FLG", nullable: true, length: 1 })
  plFlg: string | null;

  @Column("char", { name: "BS_FLG", nullable: true, length: 1 })
  bsFlg: string | null;

  @Column("char", { name: "JOV_FLG", nullable: true, length: 1 })
  jovFlg: string | null;

  @Column("char", { name: "CON_FLG", nullable: true, length: 1 })
  conFlg: string | null;

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("char", { name: "SYS_FLG", nullable: true, length: 1 })
  sysFlg: string | null;

  @Column("number", {
    name: "CL_WT_PCS",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  clWtPcs: number | null;

  @Column("char", { name: "ALT_ACCODE", nullable: true, length: 4 })
  altAccode: string | null;

  @Column("char", { name: "ALT_SCH_NO", nullable: true, length: 2 })
  altSchNo: string | null;

  @Column("varchar2", { name: "ALT_NAME", nullable: true, length: 40 })
  altName: string | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", { name: "HACCFK", nullable: true, precision: 6, scale: 0 })
  haccfk: number | null;

  @Column("varchar2", { name: "REF_TABLES", nullable: true, length: 20 })
  refTables: string | null;

  @Column("varchar2", { name: "HACCODE", nullable: true, length: 4 })
  haccode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "REF_TABLE", nullable: true, length: 20 })
  refTable: string | null;

  @Column("number", {
    name: "REFACCPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refaccpk: number | null;

  @OneToMany(() => AccCha, (accCha) => accCha.accfk)
  accChas: AccCha[];

  @OneToMany(() => AccCrndbnDet, (accCrndbnDet) => accCrndbnDet.accfk)
  accCrndbnDets: AccCrndbnDet[];

  @OneToMany(() => ChitColl, (chitColl) => chitColl.accfk)
  chitColls: ChitColl[];

  @OneToMany(() => ChitGrp, (chitGrp) => chitGrp.accfk)
  chitGrps: ChitGrp[];

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.accfk)
  chitMembers: ChitMembers[];

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.accfk2)
  chitMembers2: ChitMembers[];

  @OneToMany(() => DocAppDet12, (docAppDet12) => docAppDet12.accfk)
  docAppDets: DocAppDet12[];

  @OneToMany(() => JaccVou, (jaccVou) => jaccVou.accfk)
  jaccVous: JaccVou[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.clstkAccfk)
  jmasGsstks: JmasGsstk[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.opstkAccfk)
  jmasGsstks2: JmasGsstk[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.purAccfk)
  jmasGsstks3: JmasGsstk[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.salAccfk)
  jmasGsstks4: JmasGsstk[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.purRetAccfk)
  jmasGsstks5: JmasGsstk[];

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.salRetAccfk)
  jmasGsstks6: JmasGsstk[];

  @OneToMany(() => JmasProdChrg, (jmasProdChrg) => jmasProdChrg.accfk)
  jmasProdChrgs: JmasProdChrg[];

  @OneToMany(() => JpurBrMode, (jpurBrMode) => jpurBrMode.accfk)
  jpurBrModes: JpurBrMode[];

  @OneToMany(() => JpurDet12, (jpurDet12) => jpurDet12.accfk)
  jpurDets: JpurDet12[];

  @OneToMany(() => JpurDet2, (jpurDet2) => jpurDet2.accfk)
  jpurDets2: JpurDet2[];

  @OneToMany(() => JrecVouDet2, (jrecVouDet2) => jrecVouDet2.accfk)
  jrecVouDets: JrecVouDet2[];

  @OneToMany(() => JsalBillDet14, (jsalBillDet14) => jsalBillDet14.accfk2)
  jsalBillDets: JsalBillDet14[];

  @OneToMany(() => JsalBillDet2, (jsalBillDet2) => jsalBillDet2.accfk2)
  jsalBillDets2: JsalBillDet2[];

  @OneToMany(() => JsalCrnDet11, (jsalCrnDet11) => jsalCrnDet11.accfk)
  jsalCrnDets: JsalCrnDet11[];

  @OneToMany(() => JsalCrnDet2, (jsalCrnDet2) => jsalCrnDet2.accfk)
  jsalCrnDets2: JsalCrnDet2[];

  @OneToMany(() => JsalOrdDet3, (jsalOrdDet3) => jsalOrdDet3.accfk)
  jsalOrdDets: JsalOrdDet3[];

  @OneToMany(() => JsalQuoDet12, (jsalQuoDet12) => jsalQuoDet12.accfk)
  jsalQuoDets: JsalQuoDet12[];

  @OneToMany(() => JsalQuoDet2, (jsalQuoDet2) => jsalQuoDet2.accfk)
  jsalQuoDets2: JsalQuoDet2[];

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masAccounts)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @OneToMany(() => MasBank, (masBank) => masBank.accfk)
  masBanks: MasBank[];

  @OneToMany(() => MasBillAcc, (masBillAcc) => masBillAcc.accfk)
  masBillAccs: MasBillAcc[];

  @OneToMany(() => MasCcard, (masCcard) => masCcard.accfk)
  masCcards: MasCcard[];

  @OneToMany(() => MasChqinv, (masChqinv) => masChqinv.accfk)
  masChqinvs: MasChqinv[];

  @OneToMany(() => MasFixedassets, (masFixedassets) => masFixedassets.accfk)
  masFixedassets: MasFixedassets[];

  @OneToMany(() => MasGeneral, (masGeneral) => masGeneral.accfk)
  masGenerals: MasGeneral[];

  @OneToMany(() => MasGiftvou, (masGiftvou) => masGiftvou.accfk)
  masGiftvous: MasGiftvou[];

  @OneToMany(() => MasGlsl, (masGlsl) => masGlsl.accfk)
  masGlsls: MasGlsl[];

  @OneToMany(() => MasSalestype, (masSalestype) => masSalestype.accfk)
  masSalestypes: MasSalestype[];

  @OneToMany(() => MbillDet, (mbillDet) => mbillDet.accfk)
  mbillDets: MbillDet[];
}
