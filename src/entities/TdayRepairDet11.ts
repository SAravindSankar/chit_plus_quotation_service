import { Column, Entity } from "typeorm";

@Entity("TDAY_REPAIR_DET11")
export class TdayRepairDet11 {
  @Column("number", {
    name: "REPAIR_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairDet11Pk: number | null;

  @Column("number", {
    name: "REPAIR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairDet1Fk: number | null;

  @Column("char", { name: "SPARES_LAB", nullable: true, length: 1 })
  sparesLab: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", {
    name: "SPARE_VALUE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  spareValue: number | null;

  @Column("number", {
    name: "ST_VALUE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  stValue: number | null;

  @Column("number", {
    name: "LABOUR_VALUE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  labourValue: number | null;

  @Column("number", { name: "TOTAL", nullable: true, precision: 10, scale: 2 })
  total: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "PRODLABFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  prodlabfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
