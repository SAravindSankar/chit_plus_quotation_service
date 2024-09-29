import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008325", ["framepk"], { unique: true })
@Entity("REP_FRAME")
export class RepFrame {
  @Column("number", { primary: true, name: "FRAMEPK", precision: 8, scale: 0 })
  framepk: number;

  @Column("varchar2", { name: "FRAME_NAME", nullable: true, length: 50 })
  frameName: string | null;

  @Column("varchar2", { name: "FRAME_DESC", nullable: true, length: 50 })
  frameDesc: string | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 25 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
