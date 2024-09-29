import { Column, Entity, Index } from "typeorm";

@Index("LOGMNR_I1ENC$", ["logmnrUid", "obj", "owner"], {})
@Entity("LOGMNR_ENC$")
export class LogmnrEnc {
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

  @Column("varchar2", { name: "MKEYID", length: 192 })
  mkeyid: string;

  @Column("number", { name: "FLAG", nullable: true })
  flag: number | null;

  @Column("number", { name: "KLCLEN", nullable: true })
  klclen: number | null;

  @Column("raw", { name: "COLKLC", nullable: true, length: 2000 })
  colklc: Buffer | null;

  @Column("number", { name: "INTALG", nullable: true })
  intalg: number | null;

  @Column("number", { name: "ENCALG", nullable: true })
  encalg: number | null;

  @Column("number", { name: "OWNER#", nullable: true })
  owner: number | null;

  @Column("number", { name: "OBJ#", nullable: true })
  obj: number | null;
}
