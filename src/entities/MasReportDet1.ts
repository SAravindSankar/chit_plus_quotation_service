import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008176", ["reportDet1Pk"], { unique: true })
@Entity("MAS_REPORT_DET1")
export class MasReportDet1 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET1PK",
    precision: 8,
    scale: 0,
  })
  reportDet1Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("char", { name: "OBJECT_TYPE", nullable: true, length: 1 })
  objectType: string | null;

  @Column("varchar2", { name: "OBJECT_TEXT", nullable: true, length: 2000 })
  objectText: string | null;

  @Column("varchar2", { name: "PARA_NAME", nullable: true, length: 500 })
  paraName: string | null;

  @Column("varchar2", { name: "PARA_TYPE", nullable: true, length: 50 })
  paraType: string | null;

  @Column("varchar2", { name: "PARA_DTYPE", nullable: true, length: 500 })
  paraDtype: string | null;

  @Column("varchar2", { name: "REPORT_QRY", nullable: true, length: 4000 })
  reportQry: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
