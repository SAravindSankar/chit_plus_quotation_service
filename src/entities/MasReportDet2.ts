import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008177", ["reportDet2Pk"], { unique: true })
@Entity("MAS_REPORT_DET2")
export class MasReportDet2 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET2PK",
    precision: 8,
    scale: 0,
  })
  reportDet2Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("varchar2", { name: "COLNAME", nullable: true, length: 20 })
  colname: string | null;

  @Column("number", {
    name: "COLORDER",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  colorder: number | null;

  @Column("varchar2", { name: "COLCAPTION", nullable: true, length: 20 })
  colcaption: string | null;

  @Column("number", {
    name: "COLWIDTH",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  colwidth: number | null;

  @Column("varchar2", { name: "COLFORMAT", nullable: true, length: 12 })
  colformat: string | null;

  @Column("char", { name: "COLACTIVE", nullable: true, length: 1 })
  colactive: string | null;

  @Column("char", { name: "COLSHOW", nullable: true, length: 1 })
  colshow: string | null;

  @Column("char", { name: "COLGROUP", nullable: true, length: 1 })
  colgroup: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", {
    name: "COLSUPPRESS",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  colsuppress: string | null;

  @Column("char", { name: "ROWSUPPRESS", nullable: true, length: 1 })
  rowsuppress: string | null;

  @Column("char", {
    name: "COLWORDRAP",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  colwordrap: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
