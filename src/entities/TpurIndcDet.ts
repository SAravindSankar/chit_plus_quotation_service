import { Column, Entity, Index } from "typeorm";

@Index("TPUR_INDC_DETPK", ["tpurIndcDetpk"], { unique: true })
@Entity("TPUR_INDC_DET")
export class TpurIndcDet {
  @Column("number", {
    primary: true,
    name: "TPUR_INDC_DETPK",
    precision: 8,
    scale: 0,
  })
  tpurIndcDetpk: number;

  @Column("number", { name: "TPUR_INDCFK", precision: 8, scale: 0 })
  tpurIndcfk: number;

  @Column("varchar2", { name: "DESCRIPTION", length: 20 })
  description: string;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 10, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "ADD_AMT", nullable: true, precision: 8, scale: 2 })
  addAmt: number | null;

  @Column("number", {
    name: "LESS_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  lessAmt: number | null;

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

  @Column("number", {
    name: "ITEM_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  itemValue: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
