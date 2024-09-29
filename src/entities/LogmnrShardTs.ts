import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1SHARD_TS", ["logmnrUid", "tablespaceName"], {})
@Entity("LOGMNR_SHARD_TS")
export class LogmnrShardTs {
  @Column("number", { name: "START_SCNWRP", nullable: true })
  startScnwrp: number | null;

  @Column("number", { name: "START_SCNBAS", nullable: true })
  startScnbas: number | null;

  @Column("number", { name: "CHUNK_NUMBER" })
  chunkNumber: number;

  @Column("varchar2", { name: "TABLESPACE_NAME", length: 90 })
  tablespaceName: string;

  @Column("number", { name: "LOGMNR_UID" })
  logmnrUid: number;
}
