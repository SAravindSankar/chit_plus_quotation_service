import { Column, Entity, Index } from "typeorm";

@Index("TPUR_INDP_DETPK", ["tpurIndpDetpk"], { unique: true })
@Entity("TPUR_INDP_DET")
export class TpurIndpDet {
  @Column("number", {
    primary: true,
    name: "TPUR_INDP_DETPK",
    precision: 8,
    scale: 0,
  })
  tpurIndpDetpk: number;

  @Column("number", { name: "TPUR_INDPFK", precision: 8, scale: 0 })
  tpurIndpfk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", {
    name: "PRE_CONSUMP",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  preConsump: number | null;

  @Column("char", { name: "PRE_SCHEME", nullable: true, length: 1 })
  preScheme: string | null;

  @Column("number", {
    name: "CURR_CONSUMP",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  currConsump: number | null;

  @Column("char", { name: "CURR_SCHEME", nullable: true, length: 1 })
  currScheme: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

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
