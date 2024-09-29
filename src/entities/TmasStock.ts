import { Column, Entity } from "typeorm";

@Entity("TMAS_STOCK")
export class TmasStock {
  @Column("number", {
    name: "STOCKPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  stockpk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "OPSTK_ACCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  opstkAccfk: number | null;

  @Column("number", {
    name: "CLSTK_ACCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  clstkAccfk: number | null;

  @Column("number", {
    name: "OPSTK_WT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkWt: number | null;

  @Column("number", {
    name: "OPSTK_PCS",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkPcs: number | null;

  @Column("number", {
    name: "OPSTK_VAL",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkVal: number | null;

  @Column("number", {
    name: "PUR_ACCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  purAccfk: number | null;

  @Column("number", {
    name: "SAL_ACCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  salAccfk: number | null;

  @Column("number", {
    name: "OPSTK_AVERATE",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkAverate: number | null;

  @Column("number", {
    name: "WAST_WT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  wastWt: number | null;

  @Column("number", {
    name: "ISSDOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  issdocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "TEMPTAXFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  temptaxfk: number | null;
}
