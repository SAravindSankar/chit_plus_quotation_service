import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_I1SHARD_TS", ["logmnrUid", "dropScn"], {})
@Index("LOGMNRC_SHARD_TS_PK", ["logmnrUid", "tablespaceName", "startScn"], {
  unique: true,
})
@Entity("LOGMNRC_SHARD_TS")
export class LogmnrcShardTs {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { primary: true, name: "START_SCN" })
  startScn: number;

  @Column("number", { name: "CHUNK_NUMBER" })
  chunkNumber: number;

  @Column("varchar2", { primary: true, name: "TABLESPACE_NAME", length: 90 })
  tablespaceName: string;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
