import { Column, Entity, Index } from "typeorm";

@Index("AQ$_QUEUE_TABLES_PRIMARY", ["objno"], { unique: true })
@Index("I1_QUEUE_TABLES", ["objno", "schema", "flags"], {})
@Entity("AQ$_QUEUE_TABLES")
export class AqQueueTables {
  @Column("varchar2", { name: "TABLE_COMMENT", nullable: true, length: 2000 })
  tableComment: string | null;

  @Column("varchar2", { name: "TIMEZONE", nullable: true, length: 64 })
  timezone: string | null;

  @Column("number", { name: "SORT_COLS" })
  sortCols: number;

  @Column("number", { name: "FLAGS" })
  flags: number;

  @Column("number", { primary: true, name: "OBJNO" })
  objno: number;

  @Column("number", { name: "UDATA_TYPE" })
  udataType: number;

  @Column("varchar2", { name: "NAME", length: 128 })
  name: string;

  @Column("varchar2", { name: "SCHEMA", length: 128 })
  schema: string;
}
