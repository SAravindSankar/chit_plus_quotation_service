import { Column, Entity } from "typeorm";

@Entity("SYSJPLUS")
export class Sysjplus {
  @Column("number", {
    name: "FIN_YEAR",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  finYear: number | null;

  @Column("date", { name: "START_DATE", nullable: true })
  startDate: Date | null;

  @Column("date", { name: "END_DATE", nullable: true })
  endDate: Date | null;

  @Column("char", { name: "YEP_FLAG", nullable: true, length: 1 })
  yepFlag: string | null;

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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
