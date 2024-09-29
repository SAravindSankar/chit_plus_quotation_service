import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008178", ["reportDet3Pk"], { unique: true })
@Entity("MAS_REPORT_DET3")
export class MasReportDet3 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET3PK",
    precision: 8,
    scale: 0,
  })
  reportDet3Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("char", { name: "GRANDTOTAL", nullable: true, length: 1 })
  grandtotal: string | null;

  @Column("varchar2", { name: "GRANDTITLE", nullable: true, length: 40 })
  grandtitle: string | null;

  @Column("varchar2", { name: "GRANDCOLVAL", nullable: true, length: 500 })
  grandcolval: string | null;

  @Column("char", { name: "SUBTOTAL", nullable: true, length: 1 })
  subtotal: string | null;

  @Column("varchar2", { name: "SUBTITLE", nullable: true, length: 40 })
  subtitle: string | null;

  @Column("varchar2", { name: "SUBCOLVAL", nullable: true, length: 500 })
  subcolval: string | null;

  @Column("varchar2", { name: "COLNAME", nullable: true, length: 20 })
  colname: string | null;

  @Column("varchar2", { name: "ROWCAPTION", nullable: true, length: 20 })
  rowcaption: string | null;

  @Column("varchar2", { name: "COLCAPTION", nullable: true, length: 20 })
  colcaption: string | null;

  @Column("varchar2", { name: "GROUPCOLS", nullable: true, length: 500 })
  groupcols: string | null;

  @Column("char", { name: "GROUPTYPE", nullable: true, length: 1 })
  grouptype: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
