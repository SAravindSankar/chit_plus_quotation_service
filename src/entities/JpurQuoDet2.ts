import { Column, Entity } from "typeorm";

@Entity("JPUR_QUO_DET2")
export class JpurQuoDet2 {
  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "PUR_QUO_DET2PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuoDet2Pk: number | null;

  @Column("number", {
    name: "PUR_QUOFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuofk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "PUR_DET2PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet2Pk: number | null;

  @Column("number", { name: "PURFK", nullable: true, precision: 8, scale: 0 })
  purfk: number | null;
}
