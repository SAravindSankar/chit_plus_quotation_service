import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007741", ["purDet13Pk"], { unique: true })
@Entity("JPUR_QUO_DET13")
export class JpurQuoDet13 {
  @Column("number", {
    primary: true,
    name: "PUR_DET13PK",
    precision: 8,
    scale: 0,
  })
  purDet13Pk: number;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 5 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "CARAT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  carat: number | null;

  @Column("number", {
    name: "WEIGHT",
    nullable: true,
    precision: 8,
    scale: 3,
    default: () => "0",
  })
  weight: number | null;

  @Column("number", {
    name: "PUR_QUO_DET13PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuoDet13Pk: number | null;

  @Column("number", {
    name: "PUR_QUODET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuodet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
