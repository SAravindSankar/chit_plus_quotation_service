import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008234", ["obSramtpk"], { unique: true })
@Entity("OB_SRAMT")
export class ObSramt {
  @Column("number", {
    primary: true,
    name: "OB_SRAMTPK",
    precision: 8,
    scale: 0,
  })
  obSramtpk: number;

  @Column("number", { name: "OB_AMT", nullable: true, precision: 8, scale: 3 })
  obAmt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "MAS_GENFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  masGenfk: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
