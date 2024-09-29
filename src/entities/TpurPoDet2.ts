import { Column, Entity, Index } from "typeorm";

@Index("TPUR_PO_DET2PK", ["tpurPoDet2Pk"], { unique: true })
@Entity("TPUR_PO_DET2")
export class TpurPoDet2 {
  @Column("number", {
    primary: true,
    name: "TPUR_PO_DET2PK",
    precision: 8,
    scale: 0,
  })
  tpurPoDet2Pk: number;

  @Column("number", { name: "TPUR_POFK", precision: 8, scale: 0 })
  tpurPofk: number;

  @Column("varchar2", { name: "DESCRIPTION", length: 20 })
  description: string;

  @Column("number", {
    name: "CHRG_PER",
    nullable: true,
    precision: 7,
    scale: 2,
  })
  chrgPer: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

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

  @Column("char", { name: "ADD_LESS", nullable: true, length: 2 })
  addLess: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;
}
