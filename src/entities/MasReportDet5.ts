import { Column, Entity, Index, OneToMany } from "typeorm";
import { MasReportDet51 } from "./MasReportDet51";

@Index("SYS_C008180", ["reportDet5Pk"], { unique: true })
@Entity("MAS_REPORT_DET5")
export class MasReportDet5 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET5PK",
    precision: 8,
    scale: 0,
  })
  reportDet5Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("number", { name: "FRAMEFK", nullable: true, precision: 8, scale: 0 })
  framefk: number | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("number", {
    name: "ORDER_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  orderNo: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(
    () => MasReportDet51,
    (masReportDet51) => masReportDet51.reportDet5Fk
  )
  masReportDets: MasReportDet51[];
}
