import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1TYPE$", ["logmnrUid", "toid", "version"], {})
@Entity("LOGMNR_TYPE$")
export class LogmnrType {
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

  @Column("raw", { name: "HASHCODE", nullable: true, length: 17 })
  hashcode: Buffer | null;

  @Column("raw", { name: "SUPERTOID", nullable: true, length: 16 })
  supertoid: Buffer | null;

  @Column("number", { name: "SPARE3", nullable: true })
  spare3: number | null;

  @Column("number", { name: "SPARE2", nullable: true })
  spare2: number | null;

  @Column("number", { name: "SPARE1", nullable: true })
  spare1: number | null;

  @Column("raw", { name: "ROOTTOID", nullable: true, length: 16 })
  roottoid: Buffer | null;

  @Column("raw", { name: "TYPEID", nullable: true, length: 16 })
  typeid: Buffer | null;

  @Column("number", { name: "LOCAL_METHODS", nullable: true })
  localMethods: number | null;

  @Column("number", { name: "LOCAL_ATTRS", nullable: true })
  localAttrs: number | null;

  @Column("varchar2", { name: "HELPERCLASSNAME", nullable: true, length: 4000 })
  helperclassname: string | null;

  @Column("varchar2", { name: "EXTERNNAME", nullable: true, length: 4000 })
  externname: string | null;

  @Column("number", { name: "EXTERNTYPE", nullable: true })
  externtype: number | null;

  @Column("number", { name: "SUBTYPES", nullable: true })
  subtypes: number | null;

  @Column("number", { name: "SUPERTYPES", nullable: true })
  supertypes: number | null;

  @Column("number", { name: "HIDDENMETHODS", nullable: true })
  hiddenmethods: number | null;

  @Column("number", { name: "METHODS", nullable: true })
  methods: number | null;

  @Column("number", { name: "ATTRIBUTES", nullable: true })
  attributes: number | null;

  @Column("number", { name: "PROPERTIES", nullable: true })
  properties: number | null;

  @Column("number", { name: "TYPECODE", nullable: true })
  typecode: number | null;

  @Column("raw", { name: "TVOID", nullable: true, length: 16 })
  tvoid: Buffer | null;

  @Column("varchar2", { name: "VERSION", nullable: true, length: 384 })
  version: string | null;

  // @Column("number", { name: "VERSION#", nullable: true })
  // version: number | null;
}
