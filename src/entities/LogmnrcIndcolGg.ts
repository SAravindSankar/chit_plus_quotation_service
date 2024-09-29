import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRC_INDCOL_GG_PK", ["logmnrUid", "obj", "commitScn", "intcol"], {
  unique: true,
})
@Entity("LOGMNRC_INDCOL_GG")
export class LogmnrcIndcolGg {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 4000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "POS#" })
  pos: number;

  @Column("number", { primary: true, name: "INTCOL#" })
  intcol: number;

  @Column("number", { primary: true, name: "COMMIT_SCN" })
  commitScn: number;

  @Column("number", { primary: true, name: "OBJ#" })
  obj: number;

  @Column("number", { primary: true, name: "LOGMNR_UID" })
  logmnrUid: number;
}
