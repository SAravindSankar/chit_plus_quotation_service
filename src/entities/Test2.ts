import { Column, Entity, Index } from "typeorm";

@Index("SYS_C0045613", ["name"], { unique: true })
@Entity("TEST2")
export class Test2 {
  @Column("varchar2", { primary: true, name: "NAME", length: 20 })
  name: string;

  @Column("number", { name: "MARK1", nullable: true, precision: 3, scale: 0 })
  mark1: number | null;

  @Column("number", { name: "MARK2", nullable: true, precision: 3, scale: 0 })
  mark2: number | null;

  @Column("number", { name: "MARK3", nullable: true, precision: 3, scale: 0 })
  mark3: number | null;

  @Column("number", { name: "TOTAL", nullable: true, precision: 3, scale: 0 })
  total: number | null;

  @Column("number", { name: "AVERAGE", nullable: true, precision: 5, scale: 2 })
  average: number | null;

  @Column("varchar2", { name: "RESULT", nullable: true, length: 20 })
  result: string | null;

  @Column("varchar2", { name: "GRADE", nullable: true, length: 30 })
  grade: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
