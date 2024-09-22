import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008184", ["reportDet7Pk"], { unique: true })
@Entity("MAS_REPORT_DET7")
export class MasReportDet7 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET7PK",
    precision: 8,
    scale: 0,
  })
  reportDet7Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("varchar2", { name: "CHART_TITLE", nullable: true, length: 50 })
  chartTitle: string | null;

  @Column("varchar2", { name: "CHART_SUBTITLE", nullable: true, length: 50 })
  chartSubtitle: string | null;

  @Column("char", { name: "CHART_TYPE", nullable: true, length: 1 })
  chartType: string | null;

  @Column("char", { name: "DISPLAY_TYPE", nullable: true, length: 1 })
  displayType: string | null;

  @Column("varchar2", { name: "SHOW_LIST", nullable: true, length: 20 })
  showList: string | null;

  @Column("varchar2", { name: "X_AXIS_FIELD", nullable: true, length: 50 })
  xAxisField: string | null;

  @Column("varchar2", { name: "X_AXIS_TITLE", nullable: true, length: 50 })
  xAxisTitle: string | null;

  @Column("number", {
    name: "X_AXIS_SCALE",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  xAxisScale: number | null;

  @Column("char", { name: "X_AXIS_GRIDLINE", nullable: true, length: 1 })
  xAxisGridline: string | null;

  @Column("varchar2", { name: "Y_AXIS_FIELD", nullable: true, length: 50 })
  yAxisField: string | null;

  @Column("varchar2", { name: "Y_AXIS_TITLE", nullable: true, length: 50 })
  yAxisTitle: string | null;

  @Column("number", {
    name: "Y_AXIS_SCALE",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  yAxisScale: number | null;

  @Column("number", {
    name: "Y_AXIS_FORMAT",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  yAxisFormat: number | null;

  @Column("char", { name: "Y_AXIS_GRIDLINE", nullable: true, length: 1 })
  yAxisGridline: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
