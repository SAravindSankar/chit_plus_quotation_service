import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasReportSections } from "./MasReportSections";

@Index("SYS_C008175", ["reportpk"], { unique: true })
@Entity("MAS_REPORT")
export class MasReport {
  @Column("number", { primary: true, name: "REPORTPK", precision: 8, scale: 0 })
  reportpk: number;

  @Column("char", { name: "REPORT_ID", nullable: true, length: 5 })
  reportId: string | null;

  @Column("varchar2", { name: "REPORT_NAME", nullable: true, length: 50 })
  reportName: string | null;

  @Column("varchar2", { name: "REPORT_DESC", nullable: true, length: 50 })
  reportDesc: string | null;

  @Column("number", {
    name: "POSITION_ID",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  positionId: number | null;

  @Column("varchar2", { name: "USER_GRPID", nullable: true, length: 10 })
  userGrpid: string | null;

  @Column("char", { name: "LIST", nullable: true, length: 1 })
  list: string | null;

  @Column("char", { name: "REPTYPE", nullable: true, length: 1 })
  reptype: string | null;

  @Column("char", { name: "REPORT_BASE", nullable: true, length: 1 })
  reportBase: string | null;

  @Column("char", { name: "SUB_REPORT", nullable: true, length: 1 })
  subReport: string | null;

  @Column("char", { name: "SUB_REPORTID", nullable: true, length: 5 })
  subReportid: string | null;

  @Column("number", {
    name: "LINK_VAL",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  linkVal: number | null;

  @Column("number", {
    name: "LINK_PARA",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  linkPara: number | null;

  @Column("number", {
    name: "TOT_GROUPS",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  totGroups: number | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(
    () => MasReportSections,
    (masReportSections) => masReportSections.masReports
  )
  @JoinColumn([{ name: "SECTIONFK", referencedColumnName: "sectionpk" }])
  sectionfk: MasReportSections;
}
