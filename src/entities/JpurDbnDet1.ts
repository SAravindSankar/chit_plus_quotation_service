import { Column, Entity, Index } from "typeorm";

@Index("DBN_DET1PK", ["dbnDet1Pk"], { unique: true })
@Entity("JPUR_DBN_DET1")
export class JpurDbnDet1 {
  @Column("number", {
    primary: true,
    name: "DBN_DET1PK",
    precision: 8,
    scale: 0,
  })
  dbnDet1Pk: number;

  @Column("number", { name: "DBNFK", nullable: true, precision: 8, scale: 0 })
  dbnfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 4, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "SWT", nullable: true, precision: 8, scale: 3 })
  swt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @Column("number", {
    name: "STD_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  stdQty: number | null;

  @Column("number", { name: "LWT", nullable: true, precision: 8, scale: 3 })
  lwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
