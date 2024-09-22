import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasUom } from "./MasUom";
import { TinvAdj } from "./TinvAdj";

@Index("TINV_ADJ_DETPK", ["tinvAdjDetpk"], { unique: true })
@Entity("TINV_ADJ_DET")
export class TinvAdjDet {
  @Column("number", {
    primary: true,
    name: "TINV_ADJ_DETPK",
    precision: 8,
    scale: 0,
  })
  tinvAdjDetpk: number;

  @Column("number", { name: "TGR_ADJFK", precision: 6, scale: 0 })
  tgrAdjfk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "QTY", precision: 8, scale: 3 })
  qty: number;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "VALUE", precision: 10, scale: 2 })
  value: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

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

  @ManyToOne(() => MasUom, (masUom) => masUom.tinvAdjDets)
  @JoinColumn([{ name: "UOMFK", referencedColumnName: "uompk" }])
  uomfk: MasUom;

  @ManyToOne(() => TinvAdj, (tinvAdj) => tinvAdj.tinvAdjDets)
  @JoinColumn([{ name: "TINV_ADJFK", referencedColumnName: "tinvAdjpk" }])
  tinvAdjfk: TinvAdj;
}
