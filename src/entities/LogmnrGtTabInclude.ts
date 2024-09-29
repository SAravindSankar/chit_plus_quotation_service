import { Column, Entity } from "typeorm";

@Entity("LOGMNR_GT_TAB_INCLUDE$")
export class LogmnrGtTabInclude {
  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "TABLE_NAME", nullable: true, length: 390 })
  tableName: string | null;

  @Column("varchar2", { name: "PDB_NAME", nullable: true, length: 390 })
  pdbName: string | null;

  @Column("varchar2", { name: "SCHEMA_NAME", nullable: true, length: 390 })
  schemaName: string | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;
}
