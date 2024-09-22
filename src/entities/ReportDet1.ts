import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008322", ["reptdet1Pk"], { unique: true })
@Entity("REPORT_DET1")
export class ReportDet1 {
  @Column("number", {
    primary: true,
    name: "REPTDET1PK",
    precision: 8,
    scale: 0,
  })
  reptdet1Pk: number;

  @Column("number", { name: "REPTFK", nullable: true, precision: 8, scale: 0 })
  reptfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar2", { name: "CAPTION", nullable: true, length: 20 })
  caption: string | null;

  @Column("number", { name: "LENGTH", nullable: true, precision: 2, scale: 0 })
  length: number | null;

  @Column("char", { name: "ALIGN", nullable: true, length: 1 })
  align: string | null;

  @Column("varchar2", { name: "FORMAT", nullable: true, length: 12 })
  format: string | null;

  @Column("char", { name: "MERGE", nullable: true, length: 1 })
  merge: string | null;

  @Column("char", { name: "SUPRESS", nullable: true, length: 1 })
  supress: string | null;

  @Column("char", { name: "TOTAL", nullable: true, length: 1 })
  total: string | null;

  @Column("char", { name: "GRUP", nullable: true, length: 1 })
  grup: string | null;

  @Column("char", { name: "ORD", nullable: true, length: 1 })
  ord: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 1 })
  delflag: string | null;

  @Column("number", { name: "COL_NO", nullable: true, precision: 2, scale: 0 })
  colNo: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
