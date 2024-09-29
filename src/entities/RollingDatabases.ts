import { Column, Entity } from "typeorm";

@Entity("ROLLING$DATABASES")
export class RollingDatabases {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "REVISION", nullable: true })
  revision: number | null;

  @Column("timestamp", { name: "UPDATE_TIME", nullable: true, scale: 6 })
  updateTime: Date | null;

  @Column("number", { name: "REDO_SOURCE", nullable: true })
  redoSource: number | null;

  @Column("varchar2", { name: "VERSION", nullable: true, length: 128 })
  version: string | null;

  @Column("number", { name: "ENGINE_STATUS", nullable: true })
  engineStatus: number | null;

  @Column("number", { name: "CONS_SCN", nullable: true })
  consScn: number | null;

  @Column("number", { name: "CONS_RID", nullable: true })
  consRid: number | null;

  @Column("number", { name: "CONS_RSCN", nullable: true })
  consRscn: number | null;

  @Column("number", { name: "PROD_SCN", nullable: true })
  prodScn: number | null;

  @Column("number", { name: "PROD_RID", nullable: true })
  prodRid: number | null;

  @Column("number", { name: "PROD_RSCN", nullable: true })
  prodRscn: number | null;

  @Column("number", { name: "DBID", nullable: true })
  dbid: number | null;

  @Column("varchar2", { name: "DBUN", nullable: true, length: 128 })
  dbun: string | null;

  @Column("number", { name: "ATTRIBUTES2", nullable: true })
  attributes2: number | null;

  @Column("number", { name: "ATTRIBUTES", nullable: true })
  attributes: number | null;

  @Column("number", { name: "RDBID", nullable: true })
  rdbid: number | null;
}
