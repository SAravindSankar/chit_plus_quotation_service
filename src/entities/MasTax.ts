import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { JmasGsstk } from "./JmasGsstk";
import { JsalBill } from "./JsalBill";
import { JsalQuo } from "./JsalQuo";
import { MasBranch } from "./MasBranch";

@Index("STAXPK", ["taxpk"], { unique: true })
@Entity("MAS_TAX")
export class MasTax {
  @Column("number", { primary: true, name: "TAXPK", precision: 4, scale: 0 })
  taxpk: number;

  @Column("char", { name: "CODE", nullable: true, length: 2 })
  code: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 25 })
  name: string | null;

  @Column("number", { name: "TAX_PER", nullable: true, precision: 6, scale: 2 })
  taxPer: number | null;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

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

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "SLACCFK", nullable: true, precision: 6, scale: 0 })
  slaccfk: number | null;

  @Column("number", {
    name: "SALESTYPEFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  salestypefk: number | null;

  @Column("char", { name: "TAX_TYPE", nullable: true, length: 1 })
  taxType: string | null;

  @Column("varchar2", { name: "REP_NAME", nullable: true, length: 25 })
  repName: string | null;

  @Column("number", {
    name: "SURCHARGE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  surcharge: number | null;

  @Column("number", {
    name: "SUR_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  surAccfk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("char", { name: "CATCODE", nullable: true, length: 2 })
  catcode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "PUR_STOCK_UPD", nullable: true, length: 1 })
  purStockUpd: string | null;

  @Column("number", {
    name: "REFTAXPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  reftaxpk: number | null;

  @Column("varchar2", { name: "SAL_STOCK_UPD", nullable: true, length: 1 })
  salStockUpd: string | null;

  @Column("varchar2", { name: "PUR_ACC_UPD", nullable: true, length: 1 })
  purAccUpd: string | null;

  @Column("number", {
    name: "REFSUR_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refsurAccfk: number | null;

  @Column("varchar2", { name: "SAL_ACC_UPD", nullable: true, length: 1 })
  salAccUpd: string | null;

  @Column("number", {
    name: "REFACCFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  refaccfk: number | null;

  @Column("number", {
    name: "REFGSSTKFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  refgsstkfk: number | null;

  @Column("number", {
    name: "PUR_ACCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  purAccfk: number | null;

  @OneToMany(() => JmasGsstk, (jmasGsstk) => jmasGsstk.taxfk)
  jmasGsstks: JmasGsstk[];

  @OneToMany(() => JsalBill, (jsalBill) => jsalBill.staxfk)
  jsalBills: JsalBill[];

  @OneToMany(() => JsalQuo, (jsalQuo) => jsalQuo.staxfk)
  jsalQuos: JsalQuo[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masTaxes)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;
}
