import { Column, Entity } from "typeorm";

@Entity("TDAY_LOT_DET12")
export class TdayLotDet12 {
  @Column("number", { name: "LOT_DET12PK", precision: 8, scale: 0 })
  lotDet12Pk: number;

  @Column("number", {
    name: "LOT_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  lotDet1Fk: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 30 })
  typeDesc: string | null;

  @Column("number", { name: "ONWHICH", nullable: true, precision: 8, scale: 2 })
  onwhich: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  addRateAmt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  addRatePer: number | null;

  @Column("number", { name: "CHRGFK", nullable: true, precision: 6, scale: 0 })
  chrgfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
