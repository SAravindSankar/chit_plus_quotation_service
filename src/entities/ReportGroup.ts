import { Column, Entity } from "typeorm";

@Entity("REPORT_GROUP")
export class ReportGroup {
  @Column("number", { name: "GRPPK", nullable: true, precision: 8, scale: 0 })
  grppk: number | null;

  @Column("number", { name: "TREEFK", nullable: true, precision: 8, scale: 0 })
  treefk: number | null;

  @Column("varchar2", { name: "GROUPNAME", nullable: true, length: 30 })
  groupname: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
