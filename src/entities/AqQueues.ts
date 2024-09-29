import { Column, Entity, Index } from "typeorm";

@Index("AQ$_QUEUES_CHECK", ["name", "tableObjno"], { unique: true })
@Index("AQ$_QUEUES_PRIMARY", ["oid"], { unique: true })
@Index("I1_QUEUES", ["name", "eventid", "tableObjno"], {})
@Entity("AQ$_QUEUES")
export class AqQueues {
  @Column("number", { name: "BASE_QUEUE", nullable: true, default: () => "0" })
  baseQueue: number | null;

  @Column("number", { name: "SHARDED", nullable: true })
  sharded: number | null;

  @Column("raw", { name: "SUB_OID", nullable: true, length: 16 })
  subOid: Buffer | null;

  @Column("varchar2", { name: "NETWORK_NAME", nullable: true, length: 256 })
  networkName: string | null;

  @Column("varchar2", { name: "SERVICE_NAME", nullable: true, length: 64 })
  serviceName: string | null;

  @Column("number", { name: "MEMORY_THRESHOLD", nullable: true })
  memoryThreshold: number | null;

  @Column("varchar2", { name: "QUEUE_COMMENT", nullable: true, length: 2000 })
  queueComment: string | null;

  @Column("number", { name: "RET_TIME", nullable: true })
  retTime: number | null;

  @Column("number", { name: "PROPERTIES", nullable: true })
  properties: number | null;

  @Column("number", { name: "RETRY_DELAY", nullable: true })
  retryDelay: number | null;

  @Column("number", { name: "MAX_RETRIES", nullable: true })
  maxRetries: number | null;

  @Column("number", { name: "ENABLE_FLAG" })
  enableFlag: number;

  @Column("number", { name: "USAGE" })
  usage: number;

  @Column("number", { primary: true, name: "TABLE_OBJNO" })
  tableObjno: number;

  @Column("varchar2", { primary: true, name: "NAME", length: 128 })
  name: string;

  @Column("number", { name: "EVENTID" })
  eventid: number;

  @Column("raw", { name: "OID", length: 16 })
  oid: Buffer;

  // @Column("aq$_subscribers", { name: "SUBSCRIBERS", nullable: true })
  // subscribers: NonNullable<unknown> | null;
}
