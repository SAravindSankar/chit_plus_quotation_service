import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";

@Index("GLSLCODE1", ["delflag", "slname", "accode", "slcode"], { unique: true })
@Index("GLSLNAME", ["delflag", "companyfk", "accode", "slname"], {
  unique: true,
})
@Index("GLSLPK", ["glslpk"], { unique: true })
@Entity("MAS_GLSL")
export class MasGlsl {
  @Column("number", { name: "GLSLPK", precision: 4, scale: 0 })
  glslpk: number;

  @Column("char", { primary: true, name: "ACCODE", length: 4 })
  accode: string;

  @Column("char", { primary: true, name: "SLCODE", length: 4 })
  slcode: string;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("varchar2", { primary: true, name: "SLNAME", length: 30 })
  slname: string;

  @Column("varchar2", {
    name: "COMPANYFK",
    nullable: true,
    unique: true,
    length: 10,
  })
  companyfk: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masGlsls)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;
}
