import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008553", ["tranratepk"], { unique: true })
@Entity("TRAN_RATE")
export class TranRate {
  @Column("number", {
    primary: true,
    name: "TRANRATEPK",
    precision: 4,
    scale: 0,
  })
  tranratepk: number;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

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

  @Column("number", {
    name: "LAND_COST",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  landCost: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
