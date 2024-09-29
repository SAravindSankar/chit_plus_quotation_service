import { Column, Entity, Index } from "typeorm";

@Index("DIARATEPK", ["diaRatepk"], { unique: true })
@Entity("DIA_RATE_DET1")
export class DiaRateDet1 {
  @Column("number", {
    primary: true,
    name: "DIA_RATEPK",
    precision: 8,
    scale: 0,
  })
  diaRatepk: number;

  @Column("number", { name: "REF_NO", nullable: true, precision: 5, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("date", { name: "EFF_DATE", nullable: true })
  effDate: Date | null;

  @Column("char", { name: "DIA_ST", nullable: true, length: 1 })
  diaSt: string | null;

  @Column("char", { name: "SAL_PUR", nullable: true, length: 1 })
  salPur: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "RANGE_FROM",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeFrom: number | null;

  @Column("number", {
    name: "RANGE_TO",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  rangeTo: number | null;

  @Column("number", { name: "COST", nullable: true, precision: 10, scale: 2 })
  cost: number | null;

  @Column("number", {
    name: "SAL_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  salRate: number | null;

  @Column("number", {
    name: "PUR_RATE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  purRate: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "DIA_RATE_DET1PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  diaRateDet1Pk: number | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  discPer: number | null;

  @Column("number", {
    name: "DIA_RATEFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  diaRatefk: number | null;

  @Column("varchar2", { name: "DESC2", nullable: true, length: 20 })
  desc2: string | null;

  @Column("varchar2", { name: "DESC1", nullable: true, length: 20 })
  desc1: string | null;

  @Column("number", {
    name: "DISC_AMOUNT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  discAmount: number | null;
}
