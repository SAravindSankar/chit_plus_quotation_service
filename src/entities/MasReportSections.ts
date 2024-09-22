import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasReport } from "./MasReport";

@Index("SYS_C008187", ["sectionpk"], { unique: true })
@Entity("MAS_REPORT_SECTIONS")
export class MasReportSections {
  @Column("number", {
    primary: true,
    name: "SECTIONPK",
    precision: 4,
    scale: 0,
  })
  sectionpk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 15 })
  name: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @Column("char", { name: "CODE", nullable: true, length: 1 })
  code: string | null;

  @Column("number", { name: "LAST_NO", nullable: true, precision: 4, scale: 0 })
  lastNo: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => MasReport, (masReport) => masReport.sectionfk)
  masReports: MasReport[];
}
