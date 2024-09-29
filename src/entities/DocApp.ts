import { Column, Entity, Index } from "typeorm";

@Index("APPPK", ["apppk"], { unique: true })
@Entity("DOC_APP")
export class DocApp {
  @Column("number", { primary: true, name: "APPPK", precision: 8, scale: 0 })
  apppk: number;

  @Column("number", {
    name: "GEN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  genDocfk: number | null;

  @Column("number", { name: "APP_NO", nullable: true, precision: 5, scale: 0 })
  appNo: number | null;

  @Column("date", { name: "APP_DATE", nullable: true })
  appDate: Date | null;

  @Column("char", { name: "APP_ST", nullable: true, length: 1 })
  appSt: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
