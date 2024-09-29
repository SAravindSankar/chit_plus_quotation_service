import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008310", ["pcStkDet1Pk"], { unique: true })
@Entity("PC_STK_DET1")
export class PcStkDet1 {
  @Column("number", {
    primary: true,
    name: "PC_STK_DET1PK",
    precision: 8,
    scale: 0,
  })
  pcStkDet1Pk: number;

  @Column("number", {
    name: "PC_STKFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  pcStkfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("char", { name: "REC_ISS", nullable: true, length: 1 })
  recIss: string | null;

  @Column("number", { name: "QTY_PCS", nullable: true, precision: 8, scale: 3 })
  qtyPcs: number | null;

  @Column("number", { name: "QTY_WT", nullable: true, precision: 12, scale: 3 })
  qtyWt: number | null;

  @Column("number", {
    name: "QTY_KARAT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  qtyKarat: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  counterfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
