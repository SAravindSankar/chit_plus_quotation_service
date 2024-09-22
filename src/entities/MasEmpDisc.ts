import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008027", ["masdiscpk"], { unique: true })
@Entity("MAS_EMP_DISC")
export class MasEmpDisc {
  @Column("number", {
    primary: true,
    name: "MASDISCPK",
    precision: 6,
    scale: 0,
  })
  masdiscpk: number;

  @Column("number", { name: "EMPFK", nullable: true, precision: 4, scale: 0 })
  empfk: number | null;

  @Column("number", { name: "DEPTFK", nullable: true, precision: 4, scale: 0 })
  deptfk: number | null;

  @Column("char", { name: "DEPT", nullable: true, length: 1 })
  dept: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "DISC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  discPer: number | null;

  @Column("number", {
    name: "DISC_AMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  discAmt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "INSC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  inscPer: number | null;
}
