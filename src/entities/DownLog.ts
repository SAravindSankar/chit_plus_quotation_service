import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007542", ["downpk"], { unique: true })
@Entity("DOWN_LOG")
export class DownLog {
  @Column("number", { primary: true, name: "DOWNPK", precision: 8, scale: 0 })
  downpk: number;

  @Column("number", { name: "DOWN_NO", nullable: true, precision: 6, scale: 0 })
  downNo: number | null;

  @Column("date", { name: "DOWN_DATE", nullable: true })
  downDate: Date | null;

  @Column("number", {
    name: "DOWN_BYFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  downByfk: number | null;

  @Column("number", {
    name: "DOWN_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  downBranchfk: number | null;

  @Column("number", {
    name: "FROM_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  fromBranchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
