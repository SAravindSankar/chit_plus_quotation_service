import { Column, Entity } from "typeorm";

@Entity("DAY_OB_GSSTK")
export class DayObGsstk {
  @Column("number", {
    name: "OB_GSSTKPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  obGsstkpk: number | null;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

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
    precision: 6,
    scale: 1,
  })
  opstkPcs: number | null;

  @Column("number", {
    name: "OPSTK_VAL",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  opstkVal: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("char", { name: "UOM_IND", nullable: true, length: 1 })
  uomInd: string | null;

  @Column("number", {
    name: "OPSTK_NWT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkNwt: number | null;

  @Column("number", {
    name: "OPSTK_VAL_NWT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  opstkValNwt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
