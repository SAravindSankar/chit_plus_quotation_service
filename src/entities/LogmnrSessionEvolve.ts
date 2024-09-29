import { Column, Entity, Index } from "typeorm";

@Index(
  "LOGMNR_SESSION_EVOLVE$_PK",
  ["session", "dbId", "resetScn", "resetTimestamp"],
  { unique: true }
)
@Entity("LOGMNR_SESSION_EVOLVE$")
export class LogmnrSessionEvolve {
  @Column("date", { name: "SPARE4", nullable: true })
  spare4: Date | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "STATUS", nullable: true })
  status: number | null;

  @Column("number", { name: "PREV_RESET_TIMESTAMP", nullable: true })
  prevResetTimestamp: number | null;

  @Column("number", { name: "PREV_RESET_SCN", nullable: true })
  prevResetScn: number | null;

  @Column("number", { primary: true, name: "RESET_TIMESTAMP" })
  resetTimestamp: number;

  @Column("number", { primary: true, name: "RESET_SCN" })
  resetScn: number;

  @Column("number", { primary: true, name: "DB_ID" })
  dbId: number;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;

  @Column("number", { name: "BRANCH_LEVEL", nullable: true })
  branchLevel: number | null;
}
