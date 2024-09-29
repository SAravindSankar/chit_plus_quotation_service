import { Column, Entity } from "typeorm";

@Entity("WK_BALSTOCK")
export class WkBalstock {
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

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "PCSO", nullable: true })
  pcso: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 12, scale: 3 })
  wt: number | null;

  @Column("date", { name: "TRANDATE", nullable: true })
  trandate: Date | null;

  @Column("number", { name: "PCSP", nullable: true })
  pcsp: number | null;

  @Column("number", { name: "WTP", nullable: true, precision: 8, scale: 3 })
  wtp: number | null;

  @Column("number", { name: "PCSM", nullable: true })
  pcsm: number | null;

  @Column("number", { name: "WTM", nullable: true, precision: 8, scale: 3 })
  wtm: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
