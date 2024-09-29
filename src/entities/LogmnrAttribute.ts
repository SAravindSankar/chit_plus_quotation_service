import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1ATTRIBUTE$", ["logmnrUid", "toid", "version", "attribute"], {})
@Entity("LOGMNR_ATTRIBUTE$")
export class LogmnrAttribute {
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

  @Column("raw", { name: "TOID", length: 16 })
  toid: Buffer;

  @Column("number", { name: "GETTER", nullable: true })
  getter: number | null;

  @Column("number", { name: "SETTER", nullable: true })
  setter: number | null;

  @Column("number", { name: "SPARE5", nullable: true })
  spare5: number | null;

  @Column("number", { name: "SPARE4", nullable: true })
  spare4: number | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("number", { name: "XFLAGS", nullable: true })
  xflags: number | null;

  @Column("varchar2", { name: "EXTERNNAME", nullable: true, length: 4000 })
  externname: string | null;

  @Column("number", { name: "SCALE", nullable: true })
  scale: number | null;

  @Column("number", { name: "PRECISION#", nullable: true })
  precision: number | null;

  @Column("number", { name: "LENGTH", nullable: true })
  length: number | null;

  @Column("number", { name: "CHARSETFORM", nullable: true })
  charsetform: number | null;

  @Column("number", { name: "CHARSETID", nullable: true })
  charsetid: number | null;

  @Column("number", { name: "PROPERTIES", nullable: true })
  properties: number | null;

  @Column("number", { name: "SYNOBJ#", nullable: true })
  synobj: number | null;

  @Column("number", { name: "ATTR_VERSION#", nullable: true })
  attrVersion: number | null;

  @Column("raw", { name: "ATTR_TOID", nullable: true, length: 16 })
  attrToid: Buffer | null;

  @Column("number", { name: "ATTRIBUTE#", nullable: true })
  attribute: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 384 })
  name: string | null;

  @Column("number", { name: "VERSION#", nullable: true })
  version: number | null;
}
