import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1LOBFRAG$", ["logmnrUid", "fragobj"], {})
@Entity("LOGMNR_LOBFRAG$")
export class LogmnrLobfrag {
  @Column("number", {
    name: "LOGMNR_FLAGS",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrFlags: number | null;

  @Column("number", {
    name: "LOGMNR_UID",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  logmnrUid: number | null;

  @Column("number", { name: "FRAG#" })
  frag: number;

  @Column("number", { name: "INDFRAGOBJ#", nullable: true })
  indfragobj: number | null;

  @Column("number", { name: "TABFRAGOBJ#", nullable: true })
  tabfragobj: number | null;

  @Column("number", { name: "PARENTOBJ#", nullable: true })
  parentobj: number | null;

  @Column("number", { name: "FRAGOBJ#", nullable: true })
  fragobj: number | null;
}
