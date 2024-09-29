import { Column, Entity } from "typeorm";

@Entity("TRAN_DATA")
export class TranData {
  @Column("number", { name: "TRANPK", nullable: true, precision: 10, scale: 0 })
  tranpk: number | null;

  @Column("date", { name: "TRANDATE", nullable: true })
  trandate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "SQL", nullable: true, length: 3000 })
  sql: string | null;

  @Column("char", { name: "UPDATEFLAG", nullable: true, length: 1 })
  updateflag: string | null;

  @Column("char", { name: "LBRANCH", nullable: true, length: 1 })
  lbranch: string | null;

  @Column("number", {
    name: "LBRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  lbranchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
