import { Column, Entity } from "typeorm";

@Entity("DWK_GSSTK")
export class DwkGsstk {
  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("varchar2", { name: "GSDESC", nullable: true, length: 30 })
  gsdesc: string | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", { name: "OP_AMT", nullable: true, precision: 12, scale: 2 })
  opAmt: number | null;

  @Column("number", { name: "REC_WT", nullable: true, precision: 12, scale: 3 })
  recWt: number | null;

  @Column("number", {
    name: "REC_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  recAmt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "ISS_WT", nullable: true, precision: 12, scale: 3 })
  issWt: number | null;

  @Column("number", { name: "CL_WT", nullable: true, precision: 12, scale: 3 })
  clWt: number | null;

  @Column("number", {
    name: "AVE_RATE",
    nullable: true,
    precision: 12,
    scale: 4,
  })
  aveRate: number | null;

  @Column("number", { name: "CL_VAL", nullable: true, precision: 12, scale: 2 })
  clVal: number | null;

  @Column("number", {
    name: "REC_VOU_WT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  recVouWt: number | null;

  @Column("number", { name: "MC", nullable: true, precision: 10, scale: 2 })
  mc: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "PROD_CAT", nullable: true, length: 2 })
  prodCat: string | null;

  @Column("number", { name: "SAL_WT", nullable: true, precision: 12, scale: 3 })
  salWt: number | null;

  @Column("number", { name: "PUR_WT", nullable: true, precision: 12, scale: 3 })
  purWt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
