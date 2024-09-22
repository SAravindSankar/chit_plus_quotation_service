import { Column, Entity } from "typeorm";

@Entity("JSAL_QUO_DET2_TEMP")
export class JsalQuoDet2Temp {
  @Column("number", {
    name: "QUO_DET2PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDet2Pk: number | null;

  @Column("number", {
    name: "SAL_QUOFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salQuofk: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  onWhich: number | null;

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

  @Column("number", {
    name: "QUO_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  quoDet1Fk: number | null;
}
