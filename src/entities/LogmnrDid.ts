import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_DID$_PK", ["session"], { unique: true })
@Entity("LOGMNR_DID$")
export class LogmnrDid {
  @Column("timestamp", { name: "SPARE4", nullable: true, scale: 6 })
  spare4: Date | null;

  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "FLAGS", nullable: true, default: () => "0" })
  flags: number | null;

  @Column("number", { name: "LOGMNR_DID", nullable: true })
  logmnrDid: number | null;

  @Column("number", { primary: true, name: "SESSION#" })
  session: number;
}
