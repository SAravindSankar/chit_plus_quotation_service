import { Column, Entity, Index, OneToMany } from "typeorm";
import { TgrDbnDet12 } from "./TgrDbnDet12";

@Index("SYS_C0026101", ["tgrDbnDet1"], { unique: true })
@Entity("TGR_DBN_DET1")
export class TgrDbnDet1 {
  @Column("number", {
    primary: true,
    name: "TGR_DBN_DET1",
    precision: 8,
    scale: 0,
  })
  tgrDbnDet1: number;

  @Column("number", {
    name: "TGR_DBNFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrDbnfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "OTH_ADD", nullable: true, precision: 8, scale: 2 })
  othAdd: number | null;

  @Column("number", {
    name: "OTH_LESS",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othLess: number | null;

  @Column("number", { name: "BA_AMT", nullable: true, precision: 8, scale: 2 })
  baAmt: number | null;

  @Column("number", { name: "WA_AMT", nullable: true, precision: 8, scale: 2 })
  waAmt: number | null;

  @Column("number", {
    name: "LAND_COST",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  landCost: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TGR_DBN_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tgrDbnDet1Pk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 10, scale: 0 })
  uomfk: number | null;

  @OneToMany(() => TgrDbnDet12, (tgrDbnDet12) => tgrDbnDet12.tgrDbnDet1Fk)
  tgrDbnDets: TgrDbnDet12[];
}
