import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";

@Index("EMP_EXPPK", ["empExppk"], { unique: true })
@Entity("MAS_EMP_EXP")
export class MasEmpExp {
  @Column("number", {
    primary: true,
    name: "EMP_EXPPK",
    precision: 8,
    scale: 0,
  })
  empExppk: number;

  @Column("varchar2", { name: "ORGANISATION", length: 30 })
  organisation: string;

  @Column("varchar2", { name: "PERIOD", length: 20 })
  period: string;

  @Column("varchar2", { name: "POSITION", nullable: true, length: 20 })
  position: string | null;

  @Column("number", {
    name: "SALARY_DRAWN",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  salaryDrawn: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.masEmpExps)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
