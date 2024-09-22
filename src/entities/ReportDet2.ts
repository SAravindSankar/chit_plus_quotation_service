import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008323", ["reptdet2Pk"], { unique: true })
@Entity("REPORT_DET2")
export class ReportDet2 {
  @Column("number", {
    primary: true,
    name: "REPTDET2PK",
    precision: 8,
    scale: 0,
  })
  reptdet2Pk: number;

  @Column("number", { name: "REPTFK", nullable: true, precision: 8, scale: 0 })
  reptfk: number | null;

  @Column("char", { name: "TYPE", nullable: true, length: 1 })
  type: string | null;

  @Column("varchar2", { name: "FIELD_NAME", nullable: true, length: 20 })
  fieldName: string | null;

  @Column("varchar2", { name: "DIS_FIELD", nullable: true, length: 30 })
  disField: string | null;

  @Column("varchar2", { name: "REF_FIELD", nullable: true, length: 30 })
  refField: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
