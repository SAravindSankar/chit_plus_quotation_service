import { Column, Entity } from "typeorm";

@Entity("EMP")
export class Emp {
  @Column("varchar2", { name: "EMP_NAME", nullable: true, length: 20 })
  empName: string | null;

  @Column("varchar2", { name: "EMP_ADDRESS", nullable: true, length: 30 })
  empAddress: string | null;

  @Column("number", { name: "EMP_NO", nullable: true, precision: 3, scale: 0 })
  empNo: number | null;

  @Column("date", { name: "EMP_DATE_OF_JOIN", nullable: true })
  empDateOfJoin: Date | null;

  @Column("number", {
    name: "EMP_SALARY",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  empSalary: number | null;

  @Column("date", { name: "EMP_DOB", nullable: true })
  empDob: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
