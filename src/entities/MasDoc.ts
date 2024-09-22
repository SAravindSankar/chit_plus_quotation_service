import { Column, Entity, Index, OneToMany } from "typeorm";
import { AccOrderRepair } from "./AccOrderRepair";
import { ChitMembers } from "./ChitMembers";
import { DocAppDet11 } from "./DocAppDet11";
import { JmasReason } from "./JmasReason";
import { JpurBrMode } from "./JpurBrMode";
import { JpurTran } from "./JpurTran";
import { JsalOrdDet1 } from "./JsalOrdDet1";
import { JsalRepairDet1 } from "./JsalRepairDet1";
import { MasBranchSlno } from "./MasBranchSlno";
import { MasChqinv } from "./MasChqinv";
import { MasCompanySlno } from "./MasCompanySlno";
import { MasSalestype } from "./MasSalestype";
import { TgrDbn } from "./TgrDbn";
import { TgrGrn } from "./TgrGrn";
import { TranRem } from "./TranRem";
import { TranStock } from "./TranStock";

@Index("DOCPK", ["docpk"], { unique: true })
@Entity("MAS_DOC")
export class MasDoc {
  @Column("number", { primary: true, name: "DOCPK", precision: 8, scale: 0 })
  docpk: number;

  @Column("char", { name: "CODE", length: 4 })
  code: string;

  @Column("varchar2", { name: "MODULE", nullable: true, length: 15 })
  module: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "INVENIND", nullable: true, length: 1 })
  invenind: string | null;

  @Column("number", { name: "SECFK", nullable: true, precision: 8, scale: 0 })
  secfk: number | null;

  @Column("varchar2", { name: "DOC_NAME", nullable: true, length: 30 })
  docName: string | null;

  @Column("char", { name: "REC_ISS", nullable: true, length: 1 })
  recIss: string | null;

  @Column("char", { name: "ACC_DOCCD", nullable: true, length: 2 })
  accDoccd: string | null;

  @Column("char", { name: "STK_DOCCD", nullable: true, length: 2 })
  stkDoccd: string | null;

  @Column("char", { name: "COMP_BRAN", nullable: true, length: 1 })
  compBran: string | null;

  @Column("varchar2", { name: "DOC_SHORT", nullable: true, length: 10 })
  docShort: string | null;

  @Column("varchar2", { name: "TAB_REF", nullable: true, length: 25 })
  tabRef: string | null;

  @Column("varchar2", { name: "PK_REF", nullable: true, length: 25 })
  pkRef: string | null;

  @Column("varchar2", {
    name: "PRE_FIX",
    nullable: true,
    length: 5,
    default: () => "' '",
  })
  preFix: string | null;

  @Column("char", { name: "NEW_CODE", nullable: true, length: 4 })
  newCode: string | null;

  @Column("varchar2", { name: "SUF_FIX", nullable: true, length: 5 })
  sufFix: string | null;

  @Column("number", { name: "PRN_ORD", nullable: true, precision: 2, scale: 0 })
  prnOrd: number | null;

  @Column("char", { name: "ACC_DOC_IND", nullable: true, length: 1 })
  accDocInd: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 8 })
  shortName: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => AccOrderRepair, (accOrderRepair) => accOrderRepair.docfk)
  accOrderRepairs: AccOrderRepair[];

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.docfk)
  chitMembers: ChitMembers[];

  @OneToMany(() => DocAppDet11, (docAppDet11) => docAppDet11.det11Docfk)
  docAppDets: DocAppDet11[];

  @OneToMany(() => JmasReason, (jmasReason) => jmasReason.docfk)
  jmasReasons: JmasReason[];

  @OneToMany(() => JpurBrMode, (jpurBrMode) => jpurBrMode.docfk)
  jpurBrModes: JpurBrMode[];

  @OneToMany(() => JpurTran, (jpurTran) => jpurTran.docfk)
  jpurTrans: JpurTran[];

  @OneToMany(() => JsalOrdDet1, (jsalOrdDet1) => jsalOrdDet1.docfk)
  jsalOrdDets: JsalOrdDet1[];

  @OneToMany(() => JsalRepairDet1, (jsalRepairDet1) => jsalRepairDet1.docfk)
  jsalRepairDets: JsalRepairDet1[];

  @OneToMany(() => MasBranchSlno, (masBranchSlno) => masBranchSlno.docfk2)
  masBranchSlnos: MasBranchSlno[];

  @OneToMany(() => MasChqinv, (masChqinv) => masChqinv.docfk)
  masChqinvs: MasChqinv[];

  @OneToMany(() => MasCompanySlno, (masCompanySlno) => masCompanySlno.docfk)
  masCompanySlnos: MasCompanySlno[];

  @OneToMany(() => MasSalestype, (masSalestype) => masSalestype.docfk)
  masSalestypes: MasSalestype[];

  @OneToMany(() => TgrDbn, (tgrDbn) => tgrDbn.docfk)
  tgrDbns: TgrDbn[];

  @OneToMany(() => TgrGrn, (tgrGrn) => tgrGrn.docfk)
  tgrGrns: TgrGrn[];

  @OneToMany(() => TranRem, (tranRem) => tranRem.docfk)
  tranRems: TranRem[];

  @OneToMany(() => TranStock, (tranStock) => tranStock.docfk2)
  tranStocks: TranStock[];
}
