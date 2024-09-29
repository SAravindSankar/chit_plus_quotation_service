import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007562", ["empReleavepk"], { unique: true })
@Entity("EMP_RELEAVE")
export class EmpReleave {
  @Column("number", {
    primary: true,
    name: "EMP_RELEAVEPK",
    precision: 8,
    scale: 0,
  })
  empReleavepk: number;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("date", { name: "RELEAVE_DATE", nullable: true })
  releaveDate: Date | null;

  @Column("varchar2", { name: "RELEAVE_REASON", nullable: true, length: 200 })
  releaveReason: string | null;

  @Column("date", { name: "REJOIN_DATE", nullable: true })
  rejoinDate: Date | null;

  @Column("varchar2", { name: "REJOIN_REASON", nullable: true, length: 200 })
  rejoinReason: string | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("date", { name: "DELFLAG", nullable: true })
  delflag: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
