import { Column, Entity } from "typeorm";

@Entity("ROLLING$PARAMETERS")
export class RollingParameters {
  @Column("varchar2", { name: "SPARE3", nullable: true, length: 128 })
  spare3: string | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "MAXVAL", nullable: true })
  maxval: number | null;

  @Column("number", { name: "MINVAL", nullable: true })
  minval: number | null;

  @Column("varchar2", { name: "DEFVAL", nullable: true, length: 1024 })
  defval: string | null;

  @Column("varchar2", { name: "LSTVAL", nullable: true, length: 1024 })
  lstval: string | null;

  @Column("varchar2", { name: "CURVAL", nullable: true, length: 1024 })
  curval: string | null;

  @Column("number", { name: "ATTRIBUTES", nullable: true })
  attributes: number | null;

  @Column("number", { name: "DATATYPE", nullable: true })
  datatype: number | null;

  @Column("number", { name: "TYPE", nullable: true })
  type: number | null;

  @Column("varchar2", { name: "DESCRIP", nullable: true, length: 256 })
  descrip: string | null;

  @Column("number", { name: "ID", nullable: true })
  id: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 32 })
  name: string | null;

  @Column("number", { name: "SCOPE", nullable: true })
  scope: number | null;
}
