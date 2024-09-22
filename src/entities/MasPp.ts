import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008147", ["pppk"], { unique: true })
@Entity("MAS_PP")
export class MasPp {
  @Column("number", { primary: true, name: "PPPK", precision: 8, scale: 0 })
  pppk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "DESIG", nullable: true, length: 20 })
  desig: string | null;

  @Column("number", { name: "INV_PER", nullable: true, precision: 5, scale: 2 })
  invPer: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;
}
