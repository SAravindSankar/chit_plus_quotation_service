import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JissVou } from "./JissVou";
import { JlotGen } from "./JlotGen";
import { JrecVou } from "./JrecVou";
import { MasCompany } from "./MasCompany";
import { TpurPo } from "./TpurPo";

@Index("STKCONVEN", ["name"], {})
@Index("VENDORPK", ["vendorpk"], { unique: true })
@Entity("MAS_VENDOR")
export class MasVendor {
  @Column("number", { primary: true, name: "VENDORPK", precision: 6, scale: 0 })
  vendorpk: number;

  @Column("char", {
    name: "CODE",
    nullable: true,
    length: 4,
    default: () => "' '",
  })
  code: string | null;

  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 20 })
  state: string | null;

  @Column("char", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("char", { name: "VTYPE", nullable: true, length: 1 })
  vtype: string | null;

  @Column("varchar2", { name: "PHONE", length: 25 })
  phone: string;

  @Column("varchar2", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 25 })
  email: string | null;

  @Column("varchar2", { name: "URL", nullable: true, length: 25 })
  url: string | null;

  @Column("varchar2", { name: "CPERSON", length: 25 })
  cperson: string;

  @Column("varchar2", { name: "CDEPT", nullable: true, length: 25 })
  cdept: string | null;

  @Column("number", {
    name: "CR_LIMIT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crLimit: number | null;

  @Column("number", { name: "CR_DAYS", nullable: true, precision: 3, scale: 0 })
  crDays: number | null;

  @Column("varchar2", { name: "CST_NO", nullable: true, length: 20 })
  cstNo: string | null;

  @Column("varchar2", { name: "LST_NO", nullable: true, length: 20 })
  lstNo: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 10, scale: 2 })
  opBal: number | null;

  @Column("char", { name: "STATE_WITHINOUT", nullable: true, length: 1 })
  stateWithinout: string | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("varchar2", { name: "RC_NO", nullable: true, length: 20 })
  rcNo: string | null;

  @Column("varchar2", { name: "AREA_CODE", nullable: true, length: 10 })
  areaCode: string | null;

  @Column("varchar2", { name: "OUR_VEN_CODE", nullable: true, length: 3 })
  ourVenCode: string | null;

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("varchar2", { name: "OUR_CODE", nullable: true, length: 10 })
  ourCode: string | null;

  @Column("number", {
    name: "OB_STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  obStdQty: number | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 8, scale: 3 })
  opWt: number | null;

  @Column("char", { name: "BTYPE", nullable: true, length: 1 })
  btype: string | null;

  @Column("number", { name: "OP_PCS", nullable: true, precision: 6, scale: 0 })
  opPcs: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("char", { name: "UOM_IND", nullable: true, length: 1 })
  uomInd: string | null;

  @Column("char", { name: "CONTEMP", nullable: true, length: 1 })
  contemp: string | null;

  @Column("char", {
    name: "GSDP",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  gsdp: string | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CUSTPK", nullable: true, precision: 8, scale: 0 })
  custpk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "OLD_CODE", nullable: true, length: 4 })
  oldCode: string | null;

  @Column("number", {
    name: "TDS_GRPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tdsGrpfk: number | null;

  @Column("number", {
    name: "REFVENDORPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refvendorpk: number | null;

  @OneToMany(() => JissVou, (jissVou) => jissVou.vendorfk)
  jissVous: JissVou[];

  @OneToMany(() => JlotGen, (jlotGen) => jlotGen.vendorfk)
  jlotGens: JlotGen[];

  @OneToMany(() => JrecVou, (jrecVou) => jrecVou.vendorfk)
  jrecVous: JrecVou[];

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masVendors)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @OneToMany(() => TpurPo, (tpurPo) => tpurPo.vendorfk)
  tpurPos: TpurPo[];
}
