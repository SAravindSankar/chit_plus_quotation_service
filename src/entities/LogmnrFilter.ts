import { Column, Entity } from "typeorm";

@Entity("LOGMNR_FILTER$")
export class LogmnrFilter {
  @Column("number", { name: "ATTR6", nullable: true })
  attr6: number | null;

  @Column("number", { name: "ATTR5", nullable: true })
  attr5: number | null;

  @Column("number", { name: "ATTR4", nullable: true })
  attr4: number | null;

  @Column("number", { name: "ATTR3", nullable: true })
  attr3: number | null;

  @Column("number", { name: "ATTR2", nullable: true })
  attr2: number | null;

  @Column("number", { name: "ATTR1", nullable: true })
  attr1: number | null;

  @Column("varchar2", { name: "FILTER_TYPE", nullable: true, length: 30 })
  filterType: string | null;

  @Column("number", { name: "SESSION#", nullable: true })
  session: number | null;

  @Column("varchar2", { name: "ATTR11", nullable: true, length: 128 })
  attr11: string | null;

  @Column("varchar2", { name: "ATTR10", nullable: true, length: 128 })
  attr10: string | null;

  @Column("varchar2", { name: "ATTR9", nullable: true, length: 128 })
  attr9: string | null;

  @Column("varchar2", { name: "ATTR8", nullable: true, length: 128 })
  attr8: string | null;

  @Column("varchar2", { name: "ATTR7", nullable: true, length: 128 })
  attr7: string | null;

  @Column("date", { name: "SPARE3", nullable: true })
  spare3: Date | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "FILTER_SCN", nullable: true })
  filterScn: number | null;
}
