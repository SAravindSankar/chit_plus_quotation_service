import { Column, Entity, Index } from "typeorm";

@Index("SYSACCPK", ["sysaccpk"], { unique: true })
@Entity("MAS_SYS_ACC")
export class MasSysAcc {
  @Column("number", { primary: true, name: "SYSACCPK", precision: 4, scale: 0 })
  sysaccpk: number;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("char", { name: "ACCFOR", nullable: true, length: 4 })
  accfor: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
