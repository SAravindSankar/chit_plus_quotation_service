import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$PARAMETERS")
export class LogstdbyParameters {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "SCN", nullable: true })
  scn: number | null;

  @Column("number", { name: "TYPE", nullable: true })
  type: number | null;

  @Column("varchar2", { name: "VALUE", nullable: true, length: 2000 })
  value: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;
}
