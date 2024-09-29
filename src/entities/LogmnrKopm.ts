import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1KOPM$", ["logmnrUid", "name"], {})
@Entity("LOGMNR_KOPM$")
export class LogmnrKopm {
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

  @Column("raw", { name: "METADATA", nullable: true, length: 255 })
  metadata: Buffer | null;

  @Column("number", { name: "LENGTH", nullable: true })
  length: number | null;
}
