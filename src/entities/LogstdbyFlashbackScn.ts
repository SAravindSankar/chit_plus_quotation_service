import { Column, Entity, Index } from "typeorm";

@Index("SYS_C004926", ["primaryScn"], { unique: true })
@Entity("LOGSTDBY$FLASHBACK_SCN")
export class LogstdbyFlashbackScn {
  @Column("date", { name: "SPARE3", nullable: true })
  spare3: Date | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("date", { name: "STANDBY_TIME", nullable: true })
  standbyTime: Date | null;

  @Column("number", { name: "STANDBY_SCN", nullable: true })
  standbyScn: number | null;

  @Column("date", { name: "PRIMARY_TIME", nullable: true })
  primaryTime: Date | null;

  @Column("number", { primary: true, name: "PRIMARY_SCN" })
  primaryScn: number;
}
