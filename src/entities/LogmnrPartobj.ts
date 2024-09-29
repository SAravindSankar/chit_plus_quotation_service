import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1PARTOBJ$", ["logmnrUid", "obj"], {})
@Entity("LOGMNR_PARTOBJ$")
export class LogmnrPartobj {
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

  @Column("number", { name: "OBJ#" })
  obj: number;

  @Column("varchar2", { name: "PARAMETERS", nullable: true, length: 3000 })
  parameters: string | null;

  @Column("number", { name: "DEFINCLCOL", nullable: true })
  definclcol: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "DEFLOGGING", nullable: true })
  deflogging: number | null;

  @Column("number", { name: "DEFGROUPS", nullable: true })
  defgroups: number | null;

  @Column("number", { name: "DEFLISTS", nullable: true })
  deflists: number | null;

  @Column("number", { name: "DEFEXTPCT", nullable: true })
  defextpct: number | null;

  @Column("number", { name: "DEFMAXEXTS", nullable: true })
  defmaxexts: number | null;

  @Column("number", { name: "DEFMINEXTS", nullable: true })
  defminexts: number | null;

  @Column("number", { name: "DEFEXTSIZE", nullable: true })
  defextsize: number | null;

  @Column("number", { name: "DEFTINIEXTS", nullable: true })
  deftiniexts: number | null;

  @Column("number", { name: "DEFMAXTRANS", nullable: true })
  defmaxtrans: number | null;

  @Column("number", { name: "DEFINITRANS", nullable: true })
  definitrans: number | null;

  @Column("number", { name: "DEFPCTTHRES", nullable: true })
  defpctthres: number | null;

  @Column("number", { name: "DEFPCTUSED", nullable: true })
  defpctused: number | null;

  @Column("number", { name: "DEFPCTFREE", nullable: true })
  defpctfree: number | null;

  @Column("number", { name: "DEFTS#", nullable: true })
  defts: number | null;

  @Column("number", { name: "FLAGS", nullable: true })
  flags: number | null;

  @Column("number", { name: "PARTKEYCOLS", nullable: true })
  partkeycols: number | null;

  @Column("number", { name: "PARTCNT", nullable: true })
  partcnt: number | null;

  @Column("number", { name: "PARTTYPE", nullable: true })
  parttype: number | null;
}
