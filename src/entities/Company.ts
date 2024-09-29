import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Branch } from "./Branch";

@Entity("company")
export class Company {
  @Column("number", { name: "mobileNo", nullable: true })
  mobileNo: number | null;

  @Column("char", { name: "prodErp", nullable: true, length: 1 })
  prodErp: string | null;

  @Column("number", { name: "downfk", nullable: true })
  downfk: number | null;

  @Column("number", { name: "cferfk", nullable: true })
  cferfk: number | null;

  @Column("number", { name: "tferfk", nullable: true })
  tferfk: number | null;

  @Column("varchar2", { name: "tin", nullable: true, length: 15 })
  tin: string | null;

  @Column("char", { name: "code", nullable: true, length: 4 })
  code: string | null;

  @Column("number", {
    name: "stdCarrot",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdCarrot: number | null;

  @Column("char", { name: "glaccBill", nullable: true, length: 1 })
  glaccBill: string | null;

  @Column("char", { name: "taxBill", nullable: true, length: 1 })
  taxBill: string | null;

  @Column("varchar2", { name: "cstNo", nullable: true, length: 25 })
  cstNo: string | null;

  @Column("varchar2", { name: "lstNo", nullable: true, length: 25 })
  lstNo: string | null;

  @Column("varchar2", { name: "areacode", nullable: true, length: 10 })
  areacode: string | null;

  @Column("varchar2", { name: "rcNo", nullable: true, length: 30 })
  rcNo: string | null;

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

  @Column("varchar2", { name: "urlName", nullable: true, length: 40 })
  urlName: string | null;

  @Column("varchar2", { name: "coEmail", nullable: true, length: 40 })
  coEmail: string | null;

  @Column("varchar2", { name: "coFax", nullable: true, length: 25 })
  coFax: string | null;

  @Column("varchar2", { name: "coPhone", nullable: true, length: 25 })
  coPhone: string | null;

  @Column("char", { name: "coPin", nullable: true, length: 6 })
  coPin: string | null;

  @Column("varchar2", { name: "coState", nullable: true, length: 20 })
  coState: string | null;

  @Column("varchar2", { name: "coCity", nullable: true, length: 20 })
  coCity: string | null;

  @Column("varchar2", { name: "coAdd", nullable: true, length: 100 })
  coAdd: string | null;

  @Column("varchar2", { name: "regdEmail", nullable: true, length: 40 })
  regdEmail: string | null;

  @Column("varchar2", { name: "regdFax", nullable: true, length: 25 })
  regdFax: string | null;

  @Column("varchar2", { name: "regdPhone", nullable: true, length: 25 })
  regdPhone: string | null;

  @Column("char", { name: "regdPin", nullable: true, length: 6 })
  regdPin: string | null;

  @Column("varchar2", { name: "regdState", nullable: true, length: 20 })
  regdState: string | null;

  @Column("varchar2", { name: "regdCity", nullable: true, length: 20 })
  regdCity: string | null;

  @Column("varchar2", { name: "regdAdd", nullable: true, length: 100 })
  regdAdd: string | null;

  @Column("varchar2", { name: "name", nullable: true, length: 50 })
  name: string | null;

  @PrimaryGeneratedColumn({ type: "number", name: "companypk" })
  companypk: number;

  @OneToMany(() => Branch, (branch) => branch.companyfk)
  branches: Branch[];
}
