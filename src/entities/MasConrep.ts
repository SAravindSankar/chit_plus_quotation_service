import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008186", ["conReppk"], { unique: true })
@Entity("MAS_CONREP")
export class MasConrep {
  @Column("number", {
    primary: true,
    name: "CON_REPPK",
    precision: 8,
    scale: 0,
  })
  conReppk: number;

  @Column("varchar2", { name: "MODULE", nullable: true, length: 10 })
  module: string | null;

  @Column("varchar2", { name: "REP_HEAD", nullable: true, length: 20 })
  repHead: string | null;

  @Column("varchar2", { name: "QUERY", nullable: true, length: 2000 })
  query: string | null;

  @Column("varchar2", { name: "COLWIDTH", nullable: true, length: 200 })
  colwidth: string | null;

  @Column("varchar2", { name: "COLCAPTION", nullable: true, length: 200 })
  colcaption: string | null;

  @Column("varchar2", { name: "COLZERO", nullable: true, length: 100 })
  colzero: string | null;

  @Column("varchar2", { name: "COLTOTAL", nullable: true, length: 100 })
  coltotal: string | null;

  @Column("varchar2", { name: "GRPFLDNO", nullable: true, length: 100 })
  grpfldno: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "COLAVERAGE", nullable: true, length: 100 })
  colaverage: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
