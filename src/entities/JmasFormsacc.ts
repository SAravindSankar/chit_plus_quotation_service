import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007671", ["formAccpk"], { unique: true })
@Entity("JMAS_FORMSACC")
export class JmasFormsacc {
  @Column("number", {
    primary: true,
    name: "FORM_ACCPK",
    precision: 8,
    scale: 0,
  })
  formAccpk: number;

  @Column("number", {
    name: "TARFORMSFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tarformsfk: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("char", { name: "PROD_DOC", nullable: true, length: 1 })
  prodDoc: string | null;

  @Column("char", { name: "TRAN_ACC", nullable: true, length: 1 })
  tranAcc: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
