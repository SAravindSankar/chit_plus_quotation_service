import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1PROPS$", ["logmnrUid", "name"], {})
@Entity("LOGMNR_PROPS$")
export class LogmnrProps {
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

  @Column("varchar2", { name: "NAME", length: 384 })
  name: string;

  @Column("varchar2", { name: "COMMENT$", nullable: true, length: 4000 })
  comment: string | null;

  @Column("varchar2", { name: "VALUE$", nullable: true, length: 4000 })
  value: string | null;
}
