import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008179", ["reportDet4Pk"], { unique: true })
@Entity("MAS_REPORT_DET4")
export class MasReportDet4 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET4PK",
    precision: 8,
    scale: 0,
  })
  reportDet4Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("number", {
    name: "FIXEDROWS",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  fixedrows: number | null;

  @Column("number", {
    name: "FIXEDCOLS",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  fixedcols: number | null;

  @Column("char", { name: "MERGEROWS", nullable: true, length: 1 })
  mergerows: string | null;

  @Column("char", { name: "MERGECOLS", nullable: true, length: 1 })
  mergecols: string | null;

  @Column("char", { name: "SUPRESSROW", nullable: true, length: 1 })
  supressrow: string | null;

  @Column("char", { name: "SUPRESSCOL", nullable: true, length: 1 })
  supresscol: string | null;

  @Column("varchar2", { name: "SUPRESSVAL", nullable: true, length: 200 })
  supressval: string | null;

  @Column("varchar2", { name: "MAIN_HEAD", nullable: true, length: 500 })
  mainHead: string | null;

  @Column("varchar2", { name: "SUB_HEAD1", nullable: true, length: 500 })
  subHead1: string | null;

  @Column("varchar2", { name: "SUB_HEAD2", nullable: true, length: 500 })
  subHead2: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
