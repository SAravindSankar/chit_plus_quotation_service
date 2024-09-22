import { Column, Entity, Index } from "typeorm";

@Index("IN_CHAPK", ["inChapk"], { unique: true })
@Entity("JIN_CHA")
export class JinCha {
  @Column("number", { primary: true, name: "IN_CHAPK", precision: 8, scale: 0 })
  inChapk: number;

  @Column("char", { name: "PUR_REC", nullable: true, length: 1 })
  purRec: string | null;

  @Column("char", { name: "PUR_EXCH", nullable: true, length: 2 })
  purExch: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "IN_CHA_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  inChaNo: number | null;

  @Column("date", { name: "IN_CHA_DATE", nullable: true })
  inChaDate: Date | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("varchar2", { name: "DC_NO", nullable: true, length: 20 })
  dcNo: string | null;

  @Column("date", { name: "DC_DATE", nullable: true })
  dcDate: Date | null;

  @Column("char", { name: "IN_CHA_ST", nullable: true, length: 1 })
  inChaSt: string | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

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
}
