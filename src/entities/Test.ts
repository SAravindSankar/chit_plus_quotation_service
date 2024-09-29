import { Column, Entity, Index } from "typeorm";

@Index("SYS_C0041938", ["stuNo"], { unique: true })
@Entity("TEST")
export class Test {
  @Column("number", { primary: true, name: "STU_NO", precision: 2, scale: 0 })
  stuNo: number;

  @Column("number", { name: "MARK1", nullable: true, precision: 3, scale: 0 })
  mark1: number | null;

  @Column("number", { name: "MARK2", nullable: true, precision: 3, scale: 0 })
  mark2: number | null;

  @Column("number", { name: "MARK3", nullable: true, precision: 3, scale: 0 })
  mark3: number | null;

  @Column("number", { name: "TOTAL", nullable: true, precision: 3, scale: 0 })
  total: number | null;

  @Column("number", { name: "AVG", nullable: true, precision: 5, scale: 2 })
  avg: number | null;

  @Column("char", { name: "RESULT", nullable: true, length: 4 })
  result: string | null;

  @Column("varchar2", { name: "GRADE", nullable: true, length: 20 })
  grade: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
