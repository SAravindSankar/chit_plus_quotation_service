import { Column, Entity } from "typeorm";

@Entity("ROLLING$EVENTS")
export class RollingEvents {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("varchar2", { name: "MESSAGE", nullable: true, length: 256 })
  message: string | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("varchar2", { name: "TYPE", nullable: true, length: 16 })
  type: string | null;

  @Column("timestamp", { name: "EVENT_TIME", nullable: true, scale: 6 })
  eventTime: Date | null;

  @Column("number", { name: "REVISION", nullable: true })
  revision: number | null;

  @Column("number", { name: "INSTID", nullable: true })
  instid: number | null;

  @Column("number", { name: "EVENTID", nullable: true })
  eventid: number | null;
}
