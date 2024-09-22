import { Column, Entity, Index, OneToMany } from "typeorm";
import { ChitColl } from "./ChitColl";
import { ChitGrp } from "./ChitGrp";
import { ChitMembers } from "./ChitMembers";
import { JlotReciss } from "./JlotReciss";
import { JmasCharges } from "./JmasCharges";
import { JmasOrderSpec } from "./JmasOrderSpec";
import { JmasProduct } from "./JmasProduct";
import { JmasProdChrg } from "./JmasProdChrg";
import { JmasProdSpec } from "./JmasProdSpec";
import { JmasReason } from "./JmasReason";
import { MasAccounts } from "./MasAccounts";
import { MasBank } from "./MasBank";
import { MasBillAcc } from "./MasBillAcc";
import { MasBom } from "./MasBom";
import { MasBranch } from "./MasBranch";
import { MasCcard } from "./MasCcard";
import { MasCompanySlno } from "./MasCompanySlno";
import { MasExpacc } from "./MasExpacc";
import { MasFixedassets } from "./MasFixedassets";
import { MasGeneral } from "./MasGeneral";
import { MasGiftvou } from "./MasGiftvou";
import { MasGroupHierarchy } from "./MasGroupHierarchy";
import { MasLabchrg } from "./MasLabchrg";
import { MasLoantype } from "./MasLoantype";
import { MasNarr } from "./MasNarr";
import { MasPoterms } from "./MasPoterms";
import { MasPrice } from "./MasPrice";
import { MasProdHierarchy } from "./MasProdHierarchy";
import { MasPtStaff } from "./MasPtStaff";
import { MasSalestype } from "./MasSalestype";
import { MasVendor } from "./MasVendor";
import { PayAttendence } from "./PayAttendence";
import { PayEmpDet } from "./PayEmpDet";
import { PaySalhis } from "./PaySalhis";
import { PaySlip } from "./PaySlip";
import { ProdSpec } from "./ProdSpec";
import { TodEventsch } from "./TodEventsch";
import { TranBatta } from "./TranBatta";

@Index("COMPANYPK", ["companypk"], { unique: true })
@Entity("MAS_COMPANY")
export class MasCompany {
  @Column("varchar2", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Column("varchar2", { name: "REGD_ADD", nullable: true, length: 100 })
  regdAdd: string | null;

  @Column("varchar2", { name: "REGD_CITY", nullable: true, length: 20 })
  regdCity: string | null;

  @Column("varchar2", { name: "REGD_STATE", nullable: true, length: 20 })
  regdState: string | null;

  @Column("char", { name: "REGD_PIN", nullable: true, length: 6 })
  regdPin: string | null;

  @Column("varchar2", { name: "REGD_PHONE", nullable: true, length: 25 })
  regdPhone: string | null;

  @Column("varchar2", { name: "REGD_FAX", nullable: true, length: 25 })
  regdFax: string | null;

  @Column("varchar2", { name: "REGD_EMAIL", nullable: true, length: 40 })
  regdEmail: string | null;

  @Column("varchar2", { name: "CO_ADD", nullable: true, length: 100 })
  coAdd: string | null;

  @Column("varchar2", { name: "CO_CITY", nullable: true, length: 20 })
  coCity: string | null;

  @Column("varchar2", { name: "CO_STATE", nullable: true, length: 20 })
  coState: string | null;

  @Column("char", { name: "CO_PIN", nullable: true, length: 6 })
  coPin: string | null;

  @Column("varchar2", { name: "CO_PHONE", nullable: true, length: 25 })
  coPhone: string | null;

  @Column("varchar2", { name: "CO_FAX", nullable: true, length: 25 })
  coFax: string | null;

  @Column("varchar2", { name: "CO_EMAIL", nullable: true, length: 40 })
  coEmail: string | null;

  @Column("varchar2", { name: "URL_NAME", nullable: true, length: 40 })
  urlName: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    primary: true,
    name: "COMPANYPK",
    precision: 4,
    scale: 0,
  })
  companypk: number;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "SHORTNAME", nullable: true, length: 10 })
  shortname: string | null;

  @Column("varchar2", { name: "RC_NO", nullable: true, length: 30 })
  rcNo: string | null;

  @Column("varchar2", { name: "AREACODE", nullable: true, length: 10 })
  areacode: string | null;

  @Column("varchar2", { name: "LST_NO", nullable: true, length: 25 })
  lstNo: string | null;

  @Column("varchar2", { name: "CST_NO", nullable: true, length: 25 })
  cstNo: string | null;

  @Column("char", { name: "TAX_BILL", nullable: true, length: 1 })
  taxBill: string | null;

  @Column("char", { name: "GLACC_BILL", nullable: true, length: 1 })
  glaccBill: string | null;

  @Column("number", {
    name: "STD_CARROT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdCarrot: number | null;

  @Column("char", { name: "CODE", nullable: true, length: 4 })
  code: string | null;

  @Column("varchar2", { name: "TIN", nullable: true, length: 15 })
  tin: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "PROD_ERP", nullable: true, length: 1 })
  prodErp: string | null;

  @Column("number", {
    name: "MOBILE_NO",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  mobileNo: number | null;

  @OneToMany(() => ChitColl, (chitColl) => chitColl.companyfk)
  chitColls: ChitColl[];

  @OneToMany(() => ChitGrp, (chitGrp) => chitGrp.companyfk)
  chitGrps: ChitGrp[];

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.companyfk2)
  chitMembers: ChitMembers[];

  @OneToMany(() => JlotReciss, (jlotReciss) => jlotReciss.companyfk)
  jlotRecisses: JlotReciss[];

  @OneToMany(() => JmasCharges, (jmasCharges) => jmasCharges.companyfk)
  jmasCharges: JmasCharges[];

  @OneToMany(() => JmasOrderSpec, (jmasOrderSpec) => jmasOrderSpec.companyfk)
  jmasOrderSpecs: JmasOrderSpec[];

  @OneToMany(() => JmasProduct, (jmasProduct) => jmasProduct.companyfk2)
  jmasProducts: JmasProduct[];

  @OneToMany(() => JmasProdChrg, (jmasProdChrg) => jmasProdChrg.companyfk)
  jmasProdChrgs: JmasProdChrg[];

  @OneToMany(() => JmasProdSpec, (jmasProdSpec) => jmasProdSpec.companyfk)
  jmasProdSpecs: JmasProdSpec[];

  @OneToMany(() => JmasReason, (jmasReason) => jmasReason.companyfk)
  jmasReasons: JmasReason[];

  @OneToMany(() => MasAccounts, (masAccounts) => masAccounts.companyfk)
  masAccounts: MasAccounts[];

  @OneToMany(() => MasBank, (masBank) => masBank.companyfk2)
  masBanks: MasBank[];

  @OneToMany(() => MasBillAcc, (masBillAcc) => masBillAcc.companyfk)
  masBillAccs: MasBillAcc[];

  @OneToMany(() => MasBom, (masBom) => masBom.companyfk)
  masBoms: MasBom[];

  @OneToMany(() => MasBranch, (masBranch) => masBranch.companyfk2)
  masBranches: MasBranch[];

  @OneToMany(() => MasCcard, (masCcard) => masCcard.companyfk)
  masCcards: MasCcard[];

  @OneToMany(() => MasCompanySlno, (masCompanySlno) => masCompanySlno.companyfk)
  masCompanySlnos: MasCompanySlno[];

  @OneToMany(() => MasExpacc, (masExpacc) => masExpacc.companyfk)
  masExpaccs: MasExpacc[];

  @OneToMany(() => MasFixedassets, (masFixedassets) => masFixedassets.companyfk)
  masFixedassets: MasFixedassets[];

  @OneToMany(() => MasGeneral, (masGeneral) => masGeneral.companyfk2)
  masGenerals: MasGeneral[];

  @OneToMany(() => MasGiftvou, (masGiftvou) => masGiftvou.companyfk2)
  masGiftvous: MasGiftvou[];

  @OneToMany(
    () => MasGroupHierarchy,
    (masGroupHierarchy) => masGroupHierarchy.companyfk
  )
  masGroupHierarchies: MasGroupHierarchy[];

  @OneToMany(() => MasLabchrg, (masLabchrg) => masLabchrg.companyfk2)
  masLabchrgs: MasLabchrg[];

  @OneToMany(() => MasLoantype, (masLoantype) => masLoantype.companyfk2)
  masLoantypes: MasLoantype[];

  @OneToMany(() => MasNarr, (masNarr) => masNarr.companyfk)
  masNarrs: MasNarr[];

  @OneToMany(() => MasPoterms, (masPoterms) => masPoterms.companyfk2)
  masPoterms: MasPoterms[];

  @OneToMany(() => MasPrice, (masPrice) => masPrice.companyfk)
  masPrices: MasPrice[];

  @OneToMany(
    () => MasProdHierarchy,
    (masProdHierarchy) => masProdHierarchy.companyfk2
  )
  masProdHierarchies: MasProdHierarchy[];

  @OneToMany(() => MasPtStaff, (masPtStaff) => masPtStaff.companyfk)
  masPtStaffs: MasPtStaff[];

  @OneToMany(() => MasSalestype, (masSalestype) => masSalestype.companyfk)
  masSalestypes: MasSalestype[];

  @OneToMany(() => MasVendor, (masVendor) => masVendor.companyfk)
  masVendors: MasVendor[];

  @OneToMany(() => PayAttendence, (payAttendence) => payAttendence.companyfk)
  payAttendences: PayAttendence[];

  @OneToMany(() => PayEmpDet, (payEmpDet) => payEmpDet.companyfk)
  payEmpDets: PayEmpDet[];

  @OneToMany(() => PaySalhis, (paySalhis) => paySalhis.companyfk)
  paySalhis: PaySalhis[];

  @OneToMany(() => PaySlip, (paySlip) => paySlip.companyfk)
  paySlips: PaySlip[];

  @OneToMany(() => ProdSpec, (prodSpec) => prodSpec.companyfk)
  prodSpecs: ProdSpec[];

  @OneToMany(() => TodEventsch, (todEventsch) => todEventsch.companyfk)
  todEventsches: TodEventsch[];

  @OneToMany(() => TranBatta, (tranBatta) => tranBatta.companyfk)
  tranBattas: TranBatta[];
}
