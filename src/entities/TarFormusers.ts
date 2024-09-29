import { Column, Entity } from "typeorm";

@Entity("TAR_FORMUSERS")
export class TarFormusers {
  @Column("number", {
    name: "TARFORMUSERSPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  tarformuserspk: number | null;

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

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("char", { name: "RIGHTS", nullable: true, length: 10 })
  rights: string | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
