import { Column, Entity, Index } from "typeorm";

@Index("AQ$_KEY_SHARD_MAP_PK", ["queue", "key"], { unique: true })
@Entity("AQ$_KEY_SHARD_MAP")
export class AqKeyShardMap {
  @Column("number", { name: "DELAY_SHARD" })
  delayShard: number;

  @Column("number", { name: "SHARD" })
  shard: number;

  @Column("varchar2", { primary: true, name: "KEY", length: 128 })
  key: string;

  @Column("number", { primary: true, name: "QUEUE" })
  queue: number;
}
