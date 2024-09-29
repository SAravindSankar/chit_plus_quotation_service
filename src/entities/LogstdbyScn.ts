import { Column, Entity } from "typeorm";

@Entity("LOGSTDBY$SCN")
export class LogstdbyScn {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 2000 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "SCN", nullable: true })
  scn: number | null;

  @Column("varchar2", { name: "TYPE", nullable: true, length: 20 })
  type: string | null;

  @Column("varchar2", { name: "SCHEMA", nullable: true, length: 128 })
  schema: string | null;

  @Column("varchar2", { name: "OBJNAME", nullable: true, length: 4000 })
  objname: string | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
