import { Column, Entity, Index } from "typeorm";

@Index("DBNPK", ["dbnpk"], { unique: true })
@Entity("JPUR_DBN")
export class JpurDbn {
  @Column("number", { primary: true, name: "DBNPK", precision: 8, scale: 0 })
  dbnpk: number;

  @Column("number", { name: "DBN_NO", nullable: true, precision: 5, scale: 0 })
  dbnNo: number | null;

  @Column("date", { name: "DBN_DATE", nullable: true })
  dbnDate: Date | null;

  @Column("varchar2", { name: "DBN_TIME", nullable: true, length: 5 })
  dbnTime: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;

  @Column("number", { name: "PURFK", nullable: true, precision: 8, scale: 0 })
  purfk: number | null;

  @Column("char", { name: "DBN_ST", nullable: true, length: 1 })
  dbnSt: string | null;

  @Column("char", { name: "CASH_CREDIT", nullable: true, length: 1 })
  cashCredit: string | null;

  @Column("number", {
    name: "DBN_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  dbnAmt: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 6,
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

  @Column("varchar2", { name: "PARTY_REF", nullable: true, length: 20 })
  partyRef: string | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "ADJ_DOCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  adjDocfk: number | null;

  @Column("number", {
    name: "ADJ_TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  adjTranDocfk: number | null;

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

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "INV_NO", nullable: true, length: 20 })
  invNo: string | null;

  @Column("date", { name: "INV_DATE", nullable: true })
  invDate: Date | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("number", {
    name: "PUR_NET",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  purNet: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
