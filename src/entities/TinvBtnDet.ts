import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TinvBt } from "./TinvBt";

@Index("TINV_BTN_DETPK", ["tinvBtnDetpk"], { unique: true })
@Entity("TINV_BTN_DET")
export class TinvBtnDet {
  @Column("number", {
    primary: true,
    name: "TINV_BTN_DETPK",
    precision: 8,
    scale: 0,
  })
  tinvBtnDetpk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "UOMFK", precision: 4, scale: 0 })
  uomfk: number;

  @Column("number", { name: "TFER_QTY", precision: 8, scale: 3 })
  tferQty: number;

  @Column("number", { name: "RECD_QTY", precision: 8, scale: 3 })
  recdQty: number;

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

  @ManyToOne(() => TinvBt, (tinvBt) => tinvBt.tinvBtnDets)
  @JoinColumn([{ name: "TINV_BTNFK", referencedColumnName: "tinvBtnpk" }])
  tinvBtnfk: TinvBt;
}
