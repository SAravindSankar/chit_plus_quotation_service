import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";

@Index("EMP_QUAPK", ["empQuapk"], { unique: true })
@Entity("MAS_EMP_QUA")
export class MasEmpQua {
  @Column("number", {
    primary: true,
    name: "EMP_QUAPK",
    precision: 8,
    scale: 0,
  })
  empQuapk: number;

  @Column("varchar2", { name: "EXAMS_PASSED", length: 15 })
  examsPassed: string;

  @Column("varchar2", { name: "UNIVERSITY", length: 20 })
  university: string;

  @Column("varchar2", { name: "YEAR", length: 10 })
  year: string;

  @Column("number", { name: "MARKS", nullable: true, precision: 5, scale: 2 })
  marks: number | null;

  @Column("varchar2", { name: "GRADE", nullable: true, length: 5 })
  grade: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ACA_PROF", length: 1 })
  acaProf: string;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.masEmpQuas)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
