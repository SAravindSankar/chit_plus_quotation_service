import { Column, Entity, Index } from "typeorm";

@Index("LOGSTDBY$SKIP_IND", ["name", "action"], {})
@Entity("LOGSTDBY$SKIP_SUPPORT")
export class LogstdbySkipSupport {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "REG", nullable: true, scale: 0 })
  reg: number | null;

  @Column("varchar2", { name: "NAME5", nullable: true, length: 128 })
  name5: string | null;

  @Column("varchar2", { name: "NAME4", nullable: true, length: 128 })
  name4: string | null;

  @Column("varchar2", { name: "NAME3", nullable: true, length: 128 })
  name3: string | null;

  @Column("varchar2", { name: "NAME2", nullable: true, length: 128 })
  name2: string | null;

  @Column("varchar2", { name: "NAME", length: 128 })
  name: string;

  @Column("number", { name: "ACTION" })
  action: number;
}
