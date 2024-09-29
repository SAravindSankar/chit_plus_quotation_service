import { Column, Entity, Index } from "typeorm";

@Index("LOTDET_OTHERSPK", ["lotdetOtherspk"], { unique: true })
@Entity("JLOT_DET_OTHERS")
export class JlotDetOthers {
  @Column("number", {
    primary: true,
    name: "LOTDET_OTHERSPK",
    precision: 8,
    scale: 0,
  })
  lotdetOtherspk: number;

  @Column("number", { name: "TAG_FK", nullable: true, precision: 8, scale: 0 })
  tagFk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 40 })
  description: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
