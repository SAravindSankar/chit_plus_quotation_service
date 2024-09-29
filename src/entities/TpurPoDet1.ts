import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TpurPoDet } from "./TpurPoDet";

@Index("TPUR_PO_DET1", ["tpurPoDet1Pk"], { unique: true })
@Entity("TPUR_PO_DET1")
export class TpurPoDet1 {
  @Column("number", {
    primary: true,
    name: "TPUR_PO_DET1PK",
    precision: 8,
    scale: 0,
  })
  tpurPoDet1Pk: number;

  @Column("number", { name: "LOT", precision: 2, scale: 0 })
  lot: number;

  @Column("date", { name: "DEL_DATE" })
  delDate: Date;

  @Column("number", {
    name: "DEL_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  delQty: number | null;

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
    name: "BATCH_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  batchNo: number | null;

  @ManyToOne(() => TpurPoDet, (tpurPoDet) => tpurPoDet.tpurPoDets)
  @JoinColumn([{ name: "TPUR_PO_DETFK", referencedColumnName: "tpurPoDetpk" }])
  tpurPoDetfk: TpurPoDet;
}
