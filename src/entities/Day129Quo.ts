import { Column, Entity } from "typeorm";

@Entity("DAY129_QUO")
export class Day129Quo {
  @Column("number", {
    name: "SAL_QUOPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salQuopk: number | null;

  @Column("number", { name: "QUO_NO", nullable: true, precision: 8, scale: 0 })
  quoNo: number | null;

  @Column("date", { name: "QUO_DATE", nullable: true })
  quoDate: Date | null;

  @Column("number", {
    name: "PROD_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  prodValue: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", {
    name: "NET_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  netAmt: number | null;

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

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("char", { name: "DOC_CODE", nullable: true, length: 4 })
  docCode: string | null;

  @Column("number", { name: "DOC_NO", nullable: true, precision: 5, scale: 0 })
  docNo: number | null;

  @Column("date", { name: "DOC_DATE", nullable: true })
  docDate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "STAXFK", nullable: true, precision: 8, scale: 0 })
  staxfk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("char", { name: "QUO_IND", nullable: true, length: 1 })
  quoInd: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("char", { name: "QUO_TYPE", nullable: true, length: 1 })
  quoType: string | null;
}
