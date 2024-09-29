import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1SEED$", ["logmnrUid", "obj", "intcol"], {})
@Index(
  "LOGMNR_I2SEED$",
  ["logmnrUid", "schemaname", "tableName", "colName", "obj", "intcol"],
  {}
)
@Entity("LOGMNR_SEED$")
export class LogmnrSeed {
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

  @Column("number", { name: "NULL$" })
  null: number;

  @Column("number", { name: "SCALE", nullable: true })
  scale: number | null;

  @Column("number", { name: "PRECISION#", nullable: true })
  precision: number | null;

  @Column("number", { name: "LENGTH", nullable: true })
  length: number | null;

  @Column("number", { name: "TYPE#", nullable: true })
  type: number | null;

  @Column("number", { name: "SEGCOL#", nullable: true })
  segcol: number | null;

  @Column("number", { name: "INTCOL#", nullable: true })
  intcol: number | null;

  @Column("number", { name: "COL#", nullable: true })
  col: number | null;

  @Column("varchar2", { name: "COL_NAME", nullable: true, length: 384 })
  colName: string | null;

  @Column("varchar2", { name: "TABLE_NAME", nullable: true, length: 384 })
  tableName: string | null;

  @Column("number", { name: "OBJV#", nullable: true, precision: 22, scale: 0 })
  objv: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;

  @Column("varchar2", { name: "SCHEMANAME", nullable: true, length: 384 })
  schemaname: string | null;

  @Column("number", {
    name: "GATHER_VERSION",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  gatherVersion: number | null;

  @Column("number", {
    name: "SEED_VERSION",
    nullable: true,
    precision: 22,
    scale: 0,
  })
  seedVersion: number | null;
}
