import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasReportDet6 } from "./MasReportDet6";

@Index("SYS_C008183", ["reportDet61Pk"], { unique: true })
@Entity("MAS_REPORT_DET61")
export class MasReportDet61 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET61PK",
    precision: 8,
    scale: 0,
  })
  reportDet61Pk: number;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  masGenfk: number | null;

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

  @ManyToOne(
    () => MasReportDet6,
    (masReportDet6) => masReportDet6.masReportDets
  )
  @JoinColumn([{ name: "REPORT_DET6FK", referencedColumnName: "reportDet6Pk" }])
  reportDet6Fk: MasReportDet6;
}
