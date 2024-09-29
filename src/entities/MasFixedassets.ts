import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";

@Index("FXDACCD", ["delflag", "accode", "slcode"], { unique: true })
@Index("FXDASSETSPK", ["fxdassetspk"], { unique: true })
@Index("FXDNAME", ["delflag", "name", "slname"], { unique: true })
@Entity("MAS_FIXEDASSETS")
export class MasFixedassets {
  @Column("number", { name: "FXDASSETSPK", precision: 6, scale: 0 })
  fxdassetspk: number;

  @Column("char", { primary: true, name: "ACCODE", length: 4 })
  accode: string;

  @Column("varchar2", { name: "NAME", unique: true, length: 30 })
  name: string;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("number", {
    name: "DEP_IT_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  depItPer: number | null;

  @Column("number", {
    name: "DEP_CA_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  depCaPer: number | null;

  @Column("number", {
    name: "DEP_BANK_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  depBankPer: number | null;

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

  @Column("char", { primary: true, name: "SLCODE", nullable: true, length: 4 })
  slcode: string | null;

  @Column("varchar2", {
    name: "SLNAME",
    nullable: true,
    unique: true,
    length: 30,
  })
  slname: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masFixedassets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masFixedassets)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;
}
