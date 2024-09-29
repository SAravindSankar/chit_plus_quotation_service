import { Column, Entity, Index } from "typeorm";

@Index("LOGSTDBY$EDS_TABLES_PKEY", ["owner", "tableName"], { unique: true })
@Entity("LOGSTDBY$EDS_TABLES")
export class LogstdbyEdsTables {
  @Column("varchar2", {
    name: "MVIEW_TRIGGER_NAME",
    nullable: true,
    length: 128,
  })
  mviewTriggerName: string | null;

  @Column("varchar2", { name: "MVIEW_LOG_NAME", nullable: true, length: 128 })
  mviewLogName: string | null;

  @Column("varchar2", { name: "MVIEW_NAME", nullable: true, length: 128 })
  mviewName: string | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("varchar2", { name: "SPARE2", nullable: true, length: 255 })
  spare2: string | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("timestamp", { name: "CTIME", nullable: true, scale: 6 })
  ctime: Date | null;

  @Column("number", { name: "SOBJ#", nullable: true })
  sobj: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;

  @Column("number", { name: "OBJV", nullable: true })
  objv: number | null;

  @Column("varchar2", { name: "STATE", nullable: true, length: 255 })
  state: string | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("varchar2", { name: "DBLINK", nullable: true, length: 255 })
  dblink: string | null;

  @Column("varchar2", {
    name: "SHADOW_TRIGGER_NAME",
    nullable: true,
    length: 128,
  })
  shadowTriggerName: string | null;

  @Column("varchar2", {
    name: "BASE_TRIGGER_NAME",
    nullable: true,
    length: 128,
  })
  baseTriggerName: string | null;

  @Column("varchar2", {
    name: "SHADOW_TABLE_NAME",
    nullable: true,
    length: 128,
  })
  shadowTableName: string | null;

  @Column("varchar2", { primary: true, name: "TABLE_NAME", length: 128 })
  tableName: string;

  @Column("varchar2", { primary: true, name: "OWNER", length: 128 })
  owner: string;
}
