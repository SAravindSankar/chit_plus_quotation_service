import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_GSII_PK", ["logmnrUid", "obj"], { unique: true })
@Entity("LOGMNRC_GSII")
export class LogmnrcGsii {
  @Column("date", { name: "LOGMNR_SPARE4", nullable: true })
  logmnrSpare4: Date | null;

  @Column("varchar2", { name: "LOGMNR_SPARE3", nullable: true, length: 1000 })
  logmnrSpare3: string | null;

  @Column("number", { name: "LOGMNR_SPARE2", nullable: true })
  logmnrSpare2: number | null;

  @Column("number", { name: "LOGMNR_SPARE1", nullable: true })
  logmnrSpare1: number | null;

  @Column("number", { name: "DROP_SCN", nullable: true })
  dropScn: number | null;

  @Column("number", { name: "INDTYPE#" })
  indtype: number;

  @Column("number", { name: "BO#" })
  bo: number;

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
