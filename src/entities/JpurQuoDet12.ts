import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007738", ["purDet12Pk"], { unique: true })
@Entity("JPUR_QUO_DET12")
export class JpurQuoDet12 {
  @Column("number", {
    primary: true,
    name: "PUR_DET12PK",
    precision: 8,
    scale: 0,
  })
  purDet12Pk: number;

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

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", {
    name: "PUR_QUO_DET12PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuoDet12Pk: number | null;

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

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;
}
