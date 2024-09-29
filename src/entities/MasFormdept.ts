import { Column, Entity, Index } from "typeorm";

@Index("FORM_DEPTPK", ["formDeptpk"], { unique: true })
@Entity("MAS_FORMDEPT")
export class MasFormdept {
  @Column("number", {
    primary: true,
    name: "FORM_DEPTPK",
    precision: 10,
    scale: 0,
  })
  formDeptpk: number;

  @Column("number", {
    name: "TARFORMFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tarformfk: number | null;

  @Column("number", { name: "DEPTFK", nullable: true, precision: 10, scale: 0 })
  deptfk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 10, scale: 0 })
  empfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  companyfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;
}
