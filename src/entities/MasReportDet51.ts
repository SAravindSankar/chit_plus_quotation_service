import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasReportDet5 } from "./MasReportDet5";

@Index("SYS_C008181", ["reportDet51Pk"], { unique: true })
@Entity("MAS_REPORT_DET51")
export class MasReportDet51 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET51PK",
    precision: 8,
    scale: 0,
  })
  reportDet51Pk: number;

  @Column("number", {
    name: "CONTROLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  controlfk: number | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("number", {
    name: "ORDER_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  orderNo: number | null;

  @Column("char", { name: "INP_PARAM", nullable: true, length: 1 })
  inpParam: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(
    () => MasReportDet5,
    (masReportDet5) => masReportDet5.masReportDets
  )
  @JoinColumn([{ name: "REPORT_DET5FK", referencedColumnName: "reportDet5Pk" }])
  reportDet5Fk: MasReportDet5;
}
