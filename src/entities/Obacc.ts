import { Column, Entity, Index } from "typeorm";

@Index("OBACCPK", ["obAccpk"], { unique: true })
@Entity("OBACC")
export class Obacc {
  @Column("number", { primary: true, name: "OB_ACCPK", precision: 8, scale: 0 })
  obAccpk: number;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "OB_REFFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  obReffk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
