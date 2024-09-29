import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AccCha } from "./AccCha";
import { AccOrderRepair } from "./AccOrderRepair";
import { JaccVou } from "./JaccVou";
import { JissVou } from "./JissVou";
import { JlotGen } from "./JlotGen";
import { JmasChrgDet } from "./JmasChrgDet";
import { JmasFestival } from "./JmasFestival";
import { JmasRol } from "./JmasRol";
import { JpurTran } from "./JpurTran";
import { JrecVou } from "./JrecVou";
import { JsalBill } from "./JsalBill";
import { JsalOrder } from "./JsalOrder";
import { JsalQuo } from "./JsalQuo";
import { MasCompany } from "./MasCompany";
import { MasBranchSlno } from "./MasBranchSlno";
import { MasChqinv } from "./MasChqinv";
import { MasCounter } from "./MasCounter";
import { MasFestival } from "./MasFestival";
import { MasLkRpFoot } from "./MasLkRpFoot";
import { MasRack } from "./MasRack";
import { MasRackProd } from "./MasRackProd";
import { MasTax } from "./MasTax";
import { ObGsstk } from "./ObGsstk";
import { OldtarGroups } from "./OldtarGroups";
import { OldtarUsers } from "./OldtarUsers";
import { TinvAdj } from "./TinvAdj";
import { TinvBt } from "./TinvBt";
import { TpurPo } from "./TpurPo";
import { TranBrs } from "./TranBrs";
import { TranRem } from "./TranRem";
import { TranStock } from "./TranStock";

@Index("BRANCHNAME", ["delflag", "companyfk", "name"], { unique: true })
@Index("BRANCHPK", ["branchpk"], { unique: true })
@Entity("MAS_BRANCH")
export class MasBranch {
  @Column("number", { name: "BRANCHPK", precision: 4, scale: 0 })
  branchpk: number;

  @Column("varchar2", { primary: true, name: "NAME", length: 40 })
  name: string;

  @Column("varchar2", { name: "ADDRESS", length: 100 })
  address: string;

  @Column("varchar2", { name: "CITY", length: 20 })
  city: string;

  @Column("varchar2", { name: "STATE", nullable: true, length: 20 })
  state: string | null;

  @Column("varchar2", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("varchar2", { name: "PHONE", length: 25 })
  phone: string;

  @Column("varchar2", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar2", { name: "CPERSON", nullable: true, length: 25 })
  cperson: string | null;

  @Column("varchar2", { name: "CDEPT", nullable: true, length: 25 })
  cdept: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    precision: 4,
    scale: 0,
  })
  companyfk: number;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("varchar2", { name: "SHORTNAME", nullable: true, length: 10 })
  shortname: string | null;

  @Column("date", { name: "UPD_DATE_TIME", nullable: true })
  updDateTime: Date | null;

  @Column("date", { name: "DAY_CLOSE_PROC", nullable: true })
  dayCloseProc: Date | null;

  @Column("date", { name: "DAY_CLOSE_BKUP", nullable: true })
  dayCloseBkup: Date | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("date", { name: "DAY_CLOSE_INIT", nullable: true })
  dayCloseInit: Date | null;

  @Column("varchar2", { name: "BRANCHSIGN", nullable: true, length: 30 })
  branchsign: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("char", { name: "SESS_CLOSE_INIT", nullable: true, length: 1 })
  sessCloseInit: string | null;

  @Column("char", { name: "SESS_CLOSE_PROC", nullable: true, length: 1 })
  sessCloseProc: string | null;

  @Column("char", { name: "SESS_CLOSE_BKUP", nullable: true, length: 1 })
  sessCloseBkup: string | null;

  @Column("varchar2", { name: "REPHEAD", nullable: true, length: 10 })
  rephead: string | null;

  @Column("char", { name: "OEFLG", nullable: true, length: 1 })
  oeflg: string | null;

  @Column("date", { name: "DAY_CLOSE_BKUP2", nullable: true })
  dayCloseBkup2: Date | null;

  @Column("char", { name: "BK_TYPE", nullable: true, length: 1 })
  bkType: string | null;

  @Column("date", { name: "DAY_CLOSE_BKUP_SHOW", nullable: true })
  dayCloseBkupShow: Date | null;

  @Column("varchar2", { name: "NARR1", nullable: true, length: 60 })
  narr1: string | null;

  @Column("varchar2", { name: "NARR2", nullable: true, length: 30 })
  narr2: string | null;

  @Column("varchar2", { name: "UNITPFCODE", nullable: true, length: 15 })
  unitpfcode: string | null;

  @Column("varchar2", { name: "CODE", nullable: true, length: 2 })
  code: string | null;

  @Column("char", { name: "CORP_BRAN", nullable: true, length: 1 })
  corpBran: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "MERGE_STARPLUS", nullable: true, length: 1 })
  mergeStarplus: string | null;

  @Column("varchar2", { name: "PIN", nullable: true, length: 6 })
  pin: string | null;

  @OneToMany(() => AccCha, (accCha) => accCha.branchfk)
  accChas: AccCha[];

  @OneToMany(() => AccCha, (accCha) => accCha.forBranchfk)
  accChas2: AccCha[];

  @OneToMany(() => AccOrderRepair, (accOrderRepair) => accOrderRepair.branchfk2)
  accOrderRepairs: AccOrderRepair[];

  @OneToMany(() => JaccVou, (jaccVou) => jaccVou.branchfk)
  jaccVous: JaccVou[];

  @OneToMany(() => JissVou, (jissVou) => jissVou.branchfk)
  jissVous: JissVou[];

  @OneToMany(() => JlotGen, (jlotGen) => jlotGen.branchfk2)
  jlotGens: JlotGen[];

  @OneToMany(() => JmasChrgDet, (jmasChrgDet) => jmasChrgDet.branchfk)
  jmasChrgDets: JmasChrgDet[];

  @OneToMany(() => JmasFestival, (jmasFestival) => jmasFestival.branchfk)
  jmasFestivals: JmasFestival[];

  @OneToMany(() => JmasRol, (jmasRol) => jmasRol.branchfk)
  jmasRols: JmasRol[];

  @OneToMany(() => JpurTran, (jpurTran) => jpurTran.branchfk2)
  jpurTrans: JpurTran[];

  @OneToMany(() => JrecVou, (jrecVou) => jrecVou.branchfk)
  jrecVous: JrecVou[];

  @OneToMany(() => JsalBill, (jsalBill) => jsalBill.branchfk2)
  jsalBills: JsalBill[];

  @OneToMany(() => JsalOrder, (jsalOrder) => jsalOrder.branchfk)
  jsalOrders: JsalOrder[];

  @OneToMany(() => JsalQuo, (jsalQuo) => jsalQuo.branchfk2)
  jsalQuos: JsalQuo[];

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masBranches)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @OneToMany(() => MasBranchSlno, (masBranchSlno) => masBranchSlno.branchfk2)
  masBranchSlnos: MasBranchSlno[];

  @OneToMany(() => MasChqinv, (masChqinv) => masChqinv.branchfk)
  masChqinvs: MasChqinv[];

  @OneToMany(() => MasCounter, (masCounter) => masCounter.branchfk2)
  masCounters: MasCounter[];

  @OneToMany(() => MasFestival, (masFestival) => masFestival.branchfk)
  masFestivals: MasFestival[];

  @OneToMany(() => MasLkRpFoot, (masLkRpFoot) => masLkRpFoot.branchfk)
  masLkRpFoots: MasLkRpFoot[];

  @OneToMany(() => MasRack, (masRack) => masRack.branchfk2)
  masRacks: MasRack[];

  @OneToMany(() => MasRackProd, (masRackProd) => masRackProd.branchfk)
  masRackProds: MasRackProd[];

  @OneToMany(() => MasTax, (masTax) => masTax.branchfk)
  masTaxes: MasTax[];

  @OneToMany(() => ObGsstk, (obGsstk) => obGsstk.branchfk2)
  obGsstks: ObGsstk[];

  @OneToMany(() => OldtarGroups, (oldtarGroups) => oldtarGroups.branchfk2)
  oldtarGroups: OldtarGroups[];

  @OneToMany(() => OldtarUsers, (oldtarUsers) => oldtarUsers.branchfk)
  oldtarUsers: OldtarUsers[];

  @OneToMany(() => TinvAdj, (tinvAdj) => tinvAdj.branchfk)
  tinvAdjs: TinvAdj[];

  @OneToMany(() => TinvBt, (tinvBt) => tinvBt.branchfk)
  tinvBts: TinvBt[];

  @OneToMany(() => TinvBt, (tinvBt) => tinvBt.otBranchfk)
  tinvBts2: TinvBt[];

  @OneToMany(() => TpurPo, (tpurPo) => tpurPo.branchfk)
  tpurPos: TpurPo[];

  @OneToMany(() => TranBrs, (tranBrs) => tranBrs.branchfk)
  tranBrs: TranBrs[];

  @OneToMany(() => TranRem, (tranRem) => tranRem.branchfk)
  tranRems: TranRem[];

  @OneToMany(() => TranStock, (tranStock) => tranStock.branchfk2)
  tranStocks: TranStock[];
}
