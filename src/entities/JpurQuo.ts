import { Column, Entity } from "typeorm";

@Entity("JPUR_QUO")
export class JpurQuo {
  @Column("char", { name: "PUR_EXCH", nullable: true, length: 2 })
  purExch: string | null;

  @Column("number", { name: "PUR_NO", nullable: true, precision: 6, scale: 0 })
  purNo: number | null;

  @Column("date", { name: "PUR_DATE", nullable: true })
  purDate: Date | null;

  @Column("number", {
    name: "PUR_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  purAmt: number | null;

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

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("char", { name: "PUR_ST", nullable: true, length: 1 })
  purSt: string | null;

  @Column("number", {
    name: "ADV_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  advAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 5, scale: 0 })
  docNo: number | null;

  @Column("date", { name: "DOC_DATE", nullable: true })
  docDate: Date | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 8, scale: 0 })
  staxfk: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  stdPurity: number | null;

  @Column("number", { name: "STD_QTY", nullable: true, precision: 8, scale: 3 })
  stdQty: number | null;

  @Column("number", {
    name: "PUR_QUOPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuopk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "QUO_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDocfk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 8, scale: 0 })
  custfk: number | null;
}
