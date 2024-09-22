import { Column, Entity, Index } from "typeorm";

@Index("TARFORMUSERSPK", ["tarformuserspk"], { unique: true })
@Entity("KJTAR_FORMUSERS")
export class KjtarFormusers {
  @Column("number", {
    primary: true,
    name: "TARFORMUSERSPK",
    precision: 4,
    scale: 0,
  })
  tarformuserspk: number;

  @Column("number", {
    name: "TARFORMSFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tarformsfk: number | null;

  @Column("number", {
    name: "TARGROUPFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  targroupfk: number | null;

  @Column("char", { name: "RIGHTS", nullable: true, length: 9 })
  rights: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;
}
