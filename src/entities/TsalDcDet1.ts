import { Column, Entity, Index } from "typeorm";

@Index("TSAL_DC_DET1PK", ["tsalDcDet1Pk"], { unique: true })
@Entity("TSAL_DC_DET1")
export class TsalDcDet1 {
  @Column("number", {
    primary: true,
    name: "TSAL_DC_DET1PK",
    precision: 10,
    scale: 0,
  })
  tsalDcDet1Pk: number;

  @Column("number", {
    name: "TSAL_DCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalDcfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 10, scale: 3 })
  qty: number | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 10, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "ITEM_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  itemValue: number | null;

  @Column("number", {
    name: "OTH_ADD",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  othLess: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", { name: "TAXFK", nullable: true, precision: 10, scale: 0 })
  taxfk: number | null;

  @Column("number", {
    name: "BILLED_QTY",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  billedQty: number | null;

  @Column("varchar2", { name: "TAGNO", nullable: true, length: 15 })
  tagno: string | null;
}
