import { Column, Entity } from "typeorm";

@Entity("AVG_RATECAL")
export class AvgRatecal {
  @Column("number", { name: "GSSTKFK", nullable: true, precision: 8, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "AVG_RATE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  avgRate: number | null;

  @Column("number", {
    name: "CLOS_VAL",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  closVal: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "FINYEAR", nullable: true, length: 4 })
  finyear: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 40 })
  delflag: string | null;

  @Column("number", { name: "CL_WT", nullable: true, precision: 12, scale: 3 })
  clWt: number | null;

  @Column("varchar2", { name: "GSDESC", nullable: true, length: 40 })
  gsdesc: string | null;

  @Column("varchar2", { name: "PROD_CAT", nullable: true, length: 2 })
  prodCat: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
