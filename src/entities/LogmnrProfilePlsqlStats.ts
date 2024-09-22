import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_PROFILE_PLSQL$_PK", ["pkgowner", "pkgname", "name"], {
  unique: true,
})
@Entity("LOGMNR_PROFILE_PLSQL_STATS$")
export class LogmnrProfilePlsqlStats {
  @Column("number", { name: "SPARE6", nullable: true })
  spare6: number | null;

  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("varchar2", { name: "SPARE2", nullable: true, length: 384 })
  spare2: string | null;

  @Column("varchar2", { name: "SPARE1", nullable: true, length: 384 })
  spare1: string | null;

  @Column("number", { name: "REDORATE", nullable: true })
  redorate: number | null;

  @Column("number", { name: "REDOSIZE", nullable: true })
  redosize: number | null;

  @Column("number", { name: "OGGUNSUPPOPNUM", nullable: true })
  oggunsuppopnum: number | null;

  @Column("number", { name: "TLSBYUNSUPPOPNUM", nullable: true })
  tlsbyunsuppopnum: number | null;

  @Column("number", { name: "OPNUM", nullable: true })
  opnum: number | null;

  @Column("number", { name: "PRAGMAOP", nullable: true })
  pragmaop: number | null;

  @Column("number", { primary: true, name: "NAME" })
  name: number;

  @Column("varchar2", { primary: true, name: "PKGNAME", length: 384 })
  pkgname: string;

  @Column("varchar2", { primary: true, name: "PKGOWNER", length: 384 })
  pkgowner: string;
}
