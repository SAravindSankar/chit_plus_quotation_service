import { Column, Entity, Index } from "typeorm";

@Index("OB_OTHERPK", ["obOtherpk"], { unique: true })
@Entity("DAY_OB_OTHERS")
export class DayObOthers {
  @Column("number", {
    primary: true,
    name: "OB_OTHERPK",
    precision: 8,
    scale: 0,
  })
  obOtherpk: number;

  @Column("number", {
    name: "OB_REFFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  obReffk: number | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 14, scale: 2 })
  opBal: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "OP_PCS", nullable: true, precision: 5, scale: 0 })
  opPcs: number | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 8, scale: 3 })
  opWt: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("date", { name: "OP_DATE", nullable: true })
  opDate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
