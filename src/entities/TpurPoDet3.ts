import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TpurPoDet } from "./TpurPoDet";

@Index("TPUR_PO_DET3", ["tpurPoDet3Pk"], { unique: true })
@Entity("TPUR_PO_DET3")
export class TpurPoDet3 {
  @Column("number", {
    primary: true,
    name: "TPUR_PO_DET3PK",
    precision: 8,
    scale: 0,
  })
  tpurPoDet3Pk: number;

  @Column("varchar2", { name: "TERMS", length: 20 })
  terms: string;

  @Column("varchar2", { name: "CONDITIONS", nullable: true, length: 50 })
  conditions: string | null;

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

  @Column("number", {
    name: "POTERMSFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  potermsfk: number | null;

  @Column("number", {
    name: "TPUR_POFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tpurPofk: number | null;

  @ManyToOne(() => TpurPoDet, (tpurPoDet) => tpurPoDet.tpurPoDets2)
  @JoinColumn([{ name: "TPUR_PO_DETFK", referencedColumnName: "tpurPoDetpk" }])
  tpurPoDetfk: TpurPoDet;
}
