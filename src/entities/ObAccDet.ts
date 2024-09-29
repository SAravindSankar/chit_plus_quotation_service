import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008228", ["obAccDetpk"], { unique: true })
@Entity("OB_ACC_DET")
export class ObAccDet {
  @Column("number", {
    primary: true,
    name: "OB_ACC_DETPK",
    precision: 6,
    scale: 0,
  })
  obAccDetpk: number;

  @Column("number", {
    name: "OB_ACCFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  obAccfk: number | null;

  @Column("number", {
    name: "PB_OP_BAL",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  pbOpBal: number | null;

  @Column("number", {
    name: "OB_ACC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  obAccPer: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
