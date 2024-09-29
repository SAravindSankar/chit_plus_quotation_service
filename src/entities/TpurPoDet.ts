import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { TpurPo } from "./TpurPo";
import { MasUom } from "./MasUom";
import { TpurPoDet1 } from "./TpurPoDet1";
import { TpurPoDet3 } from "./TpurPoDet3";

@Index("TPUR_PO_DETPK", ["tpurPoDetpk"], { unique: true })
@Entity("TPUR_PO_DET")
export class TpurPoDet {
  @Column("number", {
    primary: true,
    name: "TPUR_PO_DETPK",
    precision: 8,
    scale: 0,
  })
  tpurPoDetpk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "QTY", nullable: true, precision: 10, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("char", { name: "DEL_SCH", nullable: true, length: 1 })
  delSch: string | null;

  @Column("number", { name: "VALUE", nullable: true, precision: 10, scale: 2 })
  value: number | null;

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
    name: "ISS_TRAN_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  issTranDocfk: number | null;

  @Column("number", {
    name: "ADJUSTED_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  adjustedQty: number | null;

  @Column("number", {
    name: "ISS_GRN_DC_LOTFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  issGrnDcLotfk: number | null;

  @Column("number", {
    name: "NET_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  netValue: number | null;

  @Column("number", {
    name: "ISS_DOCFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  issDocfk: number | null;

  @Column("number", {
    name: "BATCH_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  batchNo: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @ManyToOne(() => TpurPo, (tpurPo) => tpurPo.tpurPoDets)
  @JoinColumn([{ name: "TPUR_POFK", referencedColumnName: "tpurPopk" }])
  tpurPofk: TpurPo;

  @ManyToOne(() => MasUom, (masUom) => masUom.tpurPoDets)
  @JoinColumn([{ name: "UOMFK", referencedColumnName: "uompk" }])
  uomfk: MasUom;

  @OneToMany(() => TpurPoDet1, (tpurPoDet1) => tpurPoDet1.tpurPoDetfk)
  tpurPoDets: TpurPoDet1[];

  @OneToMany(() => TpurPoDet3, (tpurPoDet3) => tpurPoDet3.tpurPoDetfk)
  tpurPoDets2: TpurPoDet3[];
}
