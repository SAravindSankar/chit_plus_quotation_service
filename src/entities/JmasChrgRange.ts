import { Column, Entity } from "typeorm";

@Entity("JMAS_CHRG_RANGE")
export class JmasChrgRange {
  @Column("number", { name: "CHRG_RANGEPK", precision: 8, scale: 0 })
  chrgRangepk: number;

  @Column("number", { name: "PROD_CHRGFK", precision: 8, scale: 0 })
  prodChrgfk: number;

  @Column("number", { name: "FROM_WT", nullable: true, precision: 8, scale: 3 })
  fromWt: number | null;

  @Column("number", { name: "TO_WT", nullable: true, precision: 8, scale: 3 })
  toWt: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 4, scale: 0 })
  pcs: number | null;

  @Column("number", {
    name: "CHRG_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  chrgPer: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "CHRG_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  chrgRate: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
