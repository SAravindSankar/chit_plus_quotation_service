import { Column, Entity, Index } from "typeorm";

@Index("PARTYOB", ["branchfk", "obReffk"], {})
@Index("SYS_C008231", ["obOtherpk"], { unique: true })
@Entity("OB_OTHERS")
export class ObOthers {
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

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", { name: "OP_PCS", nullable: true, precision: 6, scale: 0 })
  opPcs: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 15, scale: 2 })
  opBal: number | null;

  @Column("number", {
    name: "OPSTK_NWT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkNwt: number | null;

  @Column("number", {
    name: "OPSTK_VAL_NWT",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  opstkValNwt: number | null;

  @Column("date", { name: "OP_DATE", nullable: true })
  opDate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
