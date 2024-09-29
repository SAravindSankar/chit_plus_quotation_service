import { Column, Entity, Index } from "typeorm";

@Index("LOGMNRT_MDDL$_PK", ["sourceObj", "sourceRowid"], { unique: true })
@Entity("LOGMNRT_MDDL$")
export class LogmnrtMddl {
  @Column("number", { primary: true, name: "SOURCE_OBJ#" })
  sourceObj: number;

  @Column("rowid", { primary: true, name: "SOURCE_ROWID" })
  sourceRowid: number;

  @Column("rowid", { name: "DEST_ROWID" })
  destRowid: number;
}
