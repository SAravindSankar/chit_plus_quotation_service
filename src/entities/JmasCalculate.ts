import { Column, Entity } from "typeorm";

@Entity("JMAS_CALCULATE")
export class JmasCalculate {
  @Column("number", { name: "PRODPK", nullable: true, precision: 6, scale: 0 })
  prodpk: number | null;

  @Column("number", {
    name: "HPRODCLASSFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  hprodclassfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", {
    name: "FIRSTLEVELPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  firstlevelpk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "BPCS", nullable: true, precision: 6, scale: 2 })
  bpcs: number | null;

  @Column("number", { name: "BWT", nullable: true, precision: 8, scale: 3 })
  bwt: number | null;

  @Column("number", { name: "BAMOUNT", nullable: true, precision: 8, scale: 2 })
  bamount: number | null;

  @Column("number", { name: "EPCS", nullable: true, precision: 6, scale: 2 })
  epcs: number | null;

  @Column("number", { name: "EWT", nullable: true, precision: 8, scale: 3 })
  ewt: number | null;

  @Column("number", { name: "EAMOUNT", nullable: true, precision: 8, scale: 2 })
  eamount: number | null;

  @Column("date", { name: "BILLDATE", nullable: true })
  billdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
