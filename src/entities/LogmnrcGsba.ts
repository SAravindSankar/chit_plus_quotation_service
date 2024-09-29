import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_GSBA_PK", ["logmnrUid", "asOfScn"], { unique: true })
@Entity("LOGMNRC_GSBA")
export class LogmnrcGsba {
  @Column("date", { name: "LOGMNR_SPARE4", nullable: true })
  logmnrSpare4: Date | null;

  @Column("varchar2", { name: "LOGMNR_SPARE3", nullable: true, length: 1000 })
  logmnrSpare3: string | null;

  @Column("number", { name: "LOGMNR_SPARE2", nullable: true })
  logmnrSpare2: number | null;

  @Column("number", { name: "LOGMNR_SPARE1", nullable: true })
  logmnrSpare1: number | null;

  @Column("varchar2", { name: "DBTIMEZONE_VALUE", nullable: true, length: 192 })
  dbtimezoneValue: string | null;

  @Column("number", { name: "DBTIMEZONE_LEN", nullable: true })
  dbtimezoneLen: number | null;

  @Column("number", { name: "NCHARSETID", nullable: true })
  ncharsetid: number | null;

  @Column("number", { name: "CHARSETID", nullable: true })
  charsetid: number | null;

  @Column("raw", { name: "FDO_VALUE", nullable: true, length: 255 })
  fdoValue: Buffer | null;

  @Column("number", { name: "FDO_LENGTH", nullable: true })
  fdoLength: number | null;

  @Column("number", { primary: true, name: "AS_OF_SCN" })
  asOfScn: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;

  @Column("varchar2", { name: "DB_GLOBAL_NAME", nullable: true, length: 384 })
  dbGlobalName: string | null;
}
