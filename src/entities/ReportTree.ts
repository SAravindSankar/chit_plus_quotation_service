import { Column, Entity } from "typeorm";

@Entity("REPORT_TREE")
export class ReportTree {
  @Column("number", { name: "TREEPK", nullable: true, precision: 8, scale: 0 })
  treepk: number | null;

  @Column("varchar2", { name: "CONST_DESC", nullable: true, length: 15 })
  constDesc: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 30 })
  description: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
