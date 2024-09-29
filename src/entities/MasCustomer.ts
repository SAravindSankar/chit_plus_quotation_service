import { Column, Entity, Index, OneToMany } from "typeorm";
import { JsalCrn } from "./JsalCrn";

@Index("COMPMAS", ["companyfk"], {})
@Index("CUST_PK", ["custpk"], { unique: true })
@Index("INDGUARANTOR", ["guarantorfk"], {})
@Index("TYPEGENMAS", ["typeGenfk"], {})
@Entity("MAS_CUSTOMER")
export class MasCustomer {
  @Column("number", { primary: true, name: "CUSTPK", precision: 8, scale: 0 })
  custpk: number;

  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("varchar2", { name: "SIGNET_NO", nullable: true, length: 10 })
  signetNo: string | null;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 200 })
  address: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 20 })
  state: string | null;

  @Column("char", { name: "PINCODE", nullable: true, length: 6 })
  pincode: string | null;

  @Column("char", { name: "CTYPE", nullable: true, length: 1 })
  ctype: string | null;

  @Column("varchar2", { name: "RELIGION", nullable: true, length: 10 })
  religion: string | null;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar2", { name: "FAX", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "EMAIL", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar2", { name: "URL", nullable: true, length: 25 })
  url: string | null;

  @Column("varchar2", { name: "CPERSON", nullable: true, length: 25 })
  cperson: string | null;

  @Column("varchar2", { name: "CDEPT", nullable: true, length: 25 })
  cdept: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "CST_NO", nullable: true, length: 20 })
  cstNo: string | null;

  @Column("varchar2", { name: "LST_NO", nullable: true, length: 20 })
  lstNo: string | null;

  @Column("char", { name: "STATE_WITHINOUT", nullable: true, length: 1 })
  stateWithinout: string | null;

  @Column("char", { name: "CODE", nullable: true, length: 4 })
  code: string | null;

  @Column("varchar2", { name: "MOBILE_NO", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("varchar2", { name: "RC_NO", nullable: true, length: 20 })
  rcNo: string | null;

  @Column("varchar2", { name: "AREA_CODE", nullable: true, length: 10 })
  areaCode: string | null;

  @Column("char", { name: "OLD_CD", nullable: true, length: 5 })
  oldCd: string | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", { name: "DUPPK", nullable: true, precision: 6, scale: 0 })
  duppk: number | null;

  @Column("date", { name: "WED_DAY", nullable: true })
  wedDay: Date | null;

  @Column("date", { name: "BIRTH_DAY", nullable: true })
  birthDay: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "BREF_NO", nullable: true, precision: 8, scale: 0 })
  brefNo: number | null;

  @Column("number", {
    name: "CR_LIMIT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  crLimit: number | null;

  @Column("number", { name: "CR_DAYS", nullable: true, precision: 3, scale: 0 })
  crDays: number | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "TDS_GRPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tdsGrpfk: number | null;

  @OneToMany(() => JsalCrn, (jsalCrn) => jsalCrn.custfk)
  jsalCrns: JsalCrn[];
}
