import { Column, Entity } from "typeorm";

@Entity("ROLLING$CONNECTIONS")
export class RollingConnections {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "DEST_PID", nullable: true })
  destPid: number | null;

  @Column("number", { name: "SOURCE_PID", nullable: true })
  sourcePid: number | null;

  @Column("timestamp", { name: "UPDATE_TIME", nullable: true, scale: 6 })
  updateTime: Date | null;

  @Column("timestamp", { name: "DISCONNECT_TIME", nullable: true, scale: 6 })
  disconnectTime: Date | null;

  @Column("timestamp", { name: "SEND_TIME", nullable: true, scale: 6 })
  sendTime: Date | null;

  @Column("timestamp", { name: "CONNECT_TIME", nullable: true, scale: 6 })
  connectTime: Date | null;

  @Column("number", { name: "CONN_HANDLE", nullable: true })
  connHandle: number | null;

  @Column("varchar2", { name: "SERVICE_NAME", nullable: true, length: 256 })
  serviceName: string | null;

  @Column("number", { name: "ATTRIBUTES", nullable: true })
  attributes: number | null;

  @Column("number", { name: "DEST_RDBID", nullable: true })
  destRdbid: number | null;

  @Column("number", { name: "SOURCE_RDBID", nullable: true })
  sourceRdbid: number | null;
}
