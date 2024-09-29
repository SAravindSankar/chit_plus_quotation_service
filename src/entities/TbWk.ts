import { Column, Entity } from "typeorm";

@Entity("TB_WK")
export class TbWk {
  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("varchar2", { name: "ACCNAME", nullable: true, length: 30 })
  accname: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("number", {
    name: "UPTO_DR",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  uptoDr: number | null;

  @Column("number", {
    name: "UPTO_CR",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  uptoCr: number | null;

  @Column("number", { name: "FOR_DR", nullable: true, precision: 12, scale: 2 })
  forDr: number | null;

  @Column("number", { name: "FOR_CR", nullable: true, precision: 12, scale: 2 })
  forCr: number | null;

  @Column("number", { name: "CL_BAL", nullable: true, precision: 12, scale: 2 })
  clBal: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "DBTOT", nullable: true, precision: 12, scale: 2 })
  dbtot: number | null;

  @Column("number", { name: "CRTOT", nullable: true, precision: 12, scale: 2 })
  crtot: number | null;

  @Column("number", {
    name: "CLWT_PCS",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  clwtPcs: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
