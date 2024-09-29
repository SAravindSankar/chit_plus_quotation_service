import { Column, Entity } from "typeorm";

@Entity("LOGMNR_GLOBAL$")
export class LogmnrGlobal {
  @Column("number", { name: "SESSION#", nullable: true })
  session: number | null;

  @Column("date", { name: "SPARE5", nullable: true })
  spare5: Date | null;

  @Column("varchar2", { name: "SPARE4", nullable: true, length: 2000 })
  spare4: string | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "VERSION_TIMESTAMP", nullable: true })
  versionTimestamp: number | null;

  @Column("number", { name: "LOCAL_RESET_TIMESTAMP", nullable: true })
  localResetTimestamp: number | null;

  @Column("number", { name: "LOCAL_RESET_SCN", nullable: true })
  localResetScn: number | null;

  @Column("number", { name: "HIGH_RECID_DELETED", nullable: true })
  highRecidDeleted: number | null;

  @Column("number", { name: "HIGH_RECID_FOREIGN", nullable: true })
  highRecidForeign: number | null;
}
