import { Column, Entity, Index } from "typeorm";

@Index("WHCHRG_DET11PK", ["whchrgDet11Pk"], { unique: true })
@Entity("WHJMAS_CHRG_DET11")
export class WhjmasChrgDet11 {
  @Column("number", {
    primary: true,
    name: "WHCHRG_DET11PK",
    precision: 8,
    scale: 0,
  })
  whchrgDet11Pk: number;

  @Column("number", {
    name: "WHCHRG_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  whchrgDet1Fk: number | null;

  @Column("number", {
    name: "RATE_FROM",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  rateFrom: number | null;

  @Column("number", {
    name: "RATE_TO",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  rateTo: number | null;

  @Column("number", { name: "WT_FROM", nullable: true, precision: 8, scale: 3 })
  wtFrom: number | null;

  @Column("number", { name: "WT_TO", nullable: true, precision: 8, scale: 3 })
  wtTo: number | null;

  @Column("number", {
    name: "PURITY_FROM",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  purityFrom: number | null;

  @Column("number", {
    name: "PURITY_TO",
    nullable: true,
    precision: 8,
    scale: 4,
  })
  purityTo: number | null;

  @Column("number", { name: "WC_PER", nullable: true, precision: 5, scale: 2 })
  wcPer: number | null;

  @Column("number", {
    name: "WC_TOUCH",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  wcTouch: number | null;

  @Column("number", { name: "WC_WT", nullable: true, precision: 8, scale: 3 })
  wcWt: number | null;

  @Column("number", { name: "MC_PER", nullable: true, precision: 8, scale: 2 })
  mcPer: number | null;

  @Column("number", { name: "MC_AMT", nullable: true, precision: 8, scale: 2 })
  mcAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "MC_INCH", nullable: true, precision: 8, scale: 2 })
  mcInch: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "WT_PCS", nullable: true, length: 1 })
  wtPcs: string | null;
}
