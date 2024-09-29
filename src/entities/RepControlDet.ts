import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008324", ["controlpk"], { unique: true })
@Entity("REP_CONTROL_DET")
export class RepControlDet {
  @Column("number", {
    primary: true,
    name: "CONTROLPK",
    precision: 8,
    scale: 0,
  })
  controlpk: number;

  @Column("varchar2", { name: "CTRL_NAME", nullable: true, length: 50 })
  ctrlName: string | null;

  @Column("varchar2", { name: "CTRL_DESC", nullable: true, length: 50 })
  ctrlDesc: string | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 25 })
  delflag: string | null;

  @Column("varchar2", { name: "CTRL_TYPE", nullable: true, length: 2 })
  ctrlType: string | null;

  @Column("number", { name: "FRAMEFK", nullable: true, precision: 8, scale: 0 })
  framefk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
