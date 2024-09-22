import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasReportDet61 } from "./MasReportDet61";

@Index("SYS_C008182", ["reportDet6Pk"], { unique: true })
@Entity("MAS_REPORT_DET6")
export class MasReportDet6 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET6PK",
    precision: 8,
    scale: 0,
  })
  reportDet6Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("char", { name: "PRN_ORN", nullable: true, length: 1 })
  prnOrn: string | null;

  @Column("char", { name: "PRN_MODE", nullable: true, length: 1 })
  prnMode: string | null;

  @Column("char", { name: "REP_HEAD_PRN", nullable: true, length: 1 })
  repHeadPrn: string | null;

  @Column("char", { name: "REP_HEAD_DET", nullable: true, length: 1 })
  repHeadDet: string | null;

  @Column("char", { name: "PAGE_HEAD_PRN", nullable: true, length: 1 })
  pageHeadPrn: string | null;

  @Column("char", { name: "FOOT_PRN", nullable: true, length: 1 })
  footPrn: string | null;

  @Column("number", {
    name: "FOOT_PER_LINE",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  footPerLine: number | null;

  @Column("char", { name: "RUN_DATE", nullable: true, length: 1 })
  runDate: string | null;

  @Column("char", { name: "PAGE_NO", nullable: true, length: 1 })
  pageNo: string | null;

  @Column("char", { name: "PAGE_TOTAL", nullable: true, length: 1 })
  pageTotal: string | null;

  @Column("char", { name: "PAGE_BREAK", nullable: true, length: 1 })
  pageBreak: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(
    () => MasReportDet61,
    (masReportDet61) => masReportDet61.reportDet6Fk
  )
  masReportDets: MasReportDet61[];
}
