import { Column, Entity, Index } from "typeorm";

@Index("TPUR_INDPPK", ["tpurIndpPk"], { unique: true })
@Entity("TPUR_INDP")
export class TpurIndp {
  @Column("number", {
    primary: true,
    name: "TPUR_INDP_PK",
    precision: 8,
    scale: 0,
  })
  tpurIndpPk: number;

  @Column("number", { name: "INDENT_NO", precision: 6, scale: 0 })
  indentNo: number;

  @Column("date", { name: "INDENT_DATE" })
  indentDate: Date;

  @Column("char", { name: "CONSUMP_MAN", length: 1 })
  consumpMan: string;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

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

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
