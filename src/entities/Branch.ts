import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Company } from "./Company";

@Entity("branch")
export class Branch {
  @Column("varchar2", { name: "pin", nullable: true, length: 6 })
  pin: string | null;

  @Column("char", { name: "mergeStarplus", nullable: true, length: 1 })
  mergeStarplus: string | null;

  @Column("number", { name: "downfk", nullable: true })
  downfk: number | null;

  @Column("number", { name: "cferfk", nullable: true })
  cferfk: number | null;

  @Column("number", { name: "tferfk", nullable: true })
  tferfk: number | null;

  @Column("char", { name: "corpBran", nullable: true, length: 1 })
  corpBran: string | null;

  @Column("varchar2", { name: "code", nullable: true, length: 2 })
  code: string | null;

  @Column("varchar2", { name: "unitpfcode", nullable: true, length: 15 })
  unitpfcode: string | null;

  @Column("varchar2", { name: "narr2", nullable: true, length: 30 })
  narr2: string | null;

  @Column("varchar2", { name: "narr1", nullable: true, length: 60 })
  narr1: string | null;

  @Column("date", { name: "dayCloseBkupShow", nullable: true })
  dayCloseBkupShow: Date | null;

  @Column("char", { name: "bkType", nullable: true, length: 1 })
  bkType: string | null;

  @Column("date", { name: "dayCloseBkup2", nullable: true })
  dayCloseBkup2: Date | null;

  @Column("char", { name: "oeflg", nullable: true, length: 1 })
  oeflg: string | null;

  @Column("varchar2", { name: "rephead", nullable: true, length: 10 })
  rephead: string | null;

  @Column("char", { name: "sessCloseBkup", nullable: true, length: 1 })
  sessCloseBkup: string | null;

  @Column("char", { name: "sessCloseProc", nullable: true, length: 1 })
  sessCloseProc: string | null;

  @Column("char", { name: "sessCloseInit", nullable: true, length: 1 })
  sessCloseInit: string | null;

  @Column("char", { name: "daySession", nullable: true, length: 1 })
  daySession: string | null;

  @Column("varchar2", { name: "branchSign", nullable: true, length: 30 })
  branchSign: string | null;

  @Column("date", { name: "dayCloseInit", nullable: true })
  dayCloseInit: Date | null;

  @Column("varchar2", { name: "mobileNo", nullable: true, length: 25 })
  mobileNo: string | null;

  @Column("date", { name: "dayCloseBkup", nullable: true })
  dayCloseBkup: Date | null;

  @Column("date", { name: "dayCloseProc", nullable: true })
  dayCloseProc: Date | null;

  @Column("date", { name: "updDateTime", nullable: true })
  updDateTime: Date | null;

  @Column("varchar2", { name: "shortname", nullable: true, length: 10 })
  shortname: string | null;

  @Column("varchar2", { name: "delflag", nullable: true, length: 20 })
  delflag: string | null;

  @Column("date", { name: "adate", nullable: true })
  adate: Date | null;

  @Column("number", { name: "abyfk", nullable: true })
  abyfk: number | null;

  @Column("date", { name: "mdate", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "mbyfk", nullable: true })
  mbyfk: number | null;

  @Column("date", { name: "cdate", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "cbyfk", nullable: true })
  cbyfk: number | null;

  @Column("raw", { name: "rrowid", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "cdept", nullable: true, length: 25 })
  cdept: string | null;

  @Column("varchar2", { name: "cperson", nullable: true, length: 25 })
  cperson: string | null;

  @Column("varchar2", { name: "email", nullable: true, length: 40 })
  email: string | null;

  @Column("varchar2", { name: "fax", nullable: true, length: 25 })
  fax: string | null;

  @Column("varchar2", { name: "phone", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar2", { name: "pincode", nullable: true, length: 6 })
  pincode: string | null;

  @Column("varchar2", { name: "state", nullable: true, length: 20 })
  state: string | null;

  @Column("varchar2", { name: "city", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "address", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar2", { name: "name", nullable: true, length: 40 })
  name: string | null;

  @PrimaryGeneratedColumn({ type: "number", name: "branchpk" })
  branchpk: number;

  @ManyToOne(() => Company, (company) => company.branches)
  @JoinColumn([{ name: "companyfk", referencedColumnName: "companypk" }])
  companyfk: Company;
}
