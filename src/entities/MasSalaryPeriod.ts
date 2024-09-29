import { Column, Entity } from "typeorm";

@Entity("MAS_SALARY_PERIOD")
export class MasSalaryPeriod {
  @Column("number", {
    name: "SAL_PERIODPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salPeriodpk: number | null;

  @Column("varchar2", { name: "DESC1", nullable: true, length: 20 })
  desc1: string | null;

  @Column("number", { name: "YEAR", nullable: true, precision: 4, scale: 0 })
  year: number | null;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("char", { name: "MON_YEAR", nullable: true, length: 8 })
  monYear: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
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
