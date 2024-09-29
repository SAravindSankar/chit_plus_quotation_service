import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008185", ["reportDet8Pk"], { unique: true })
@Entity("MAS_REPORT_DET8")
export class MasReportDet8 {
  @Column("number", {
    primary: true,
    name: "REPORT_DET8PK",
    precision: 8,
    scale: 0,
  })
  reportDet8Pk: number;

  @Column("number", {
    name: "REPORTFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  reportfk: number | null;

  @Column("char", {
    name: "BALANCE",
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  balance: string | null;

  @Column("varchar2", { name: "RUN_CAPTION", nullable: true, length: 30 })
  runCaption: string | null;

  @Column("varchar2", { name: "CLO_CAPTION", nullable: true, length: 30 })
  cloCaption: string | null;

  @Column("varchar2", { name: "RUN_FIELDS", nullable: true, length: 50 })
  runFields: string | null;

  @Column("varchar2", { name: "CLO_FIELDS", nullable: true, length: 50 })
  cloFields: string | null;

  @Column("char", { name: "RUN_TYPE", nullable: true, length: 1 })
  runType: string | null;

  @Column("char", { name: "CLO_TYPE", nullable: true, length: 1 })
  cloType: string | null;

  @Column("char", { name: "BF", nullable: true, length: 1 })
  bf: string | null;

  @Column("char", { name: "CF", nullable: true, length: 1 })
  cf: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
