import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { AccPv } from "./AccPv";

@Index("PAYVOU_DETPK", ["payvouDetpk"], { unique: true })
@Entity("ACC_PV_DET")
export class AccPvDet {
  @Column("number", {
    primary: true,
    name: "PAYVOU_DETPK",
    precision: 8,
    scale: 0,
  })
  payvouDetpk: number;

  @Column("number", { name: "PAYFK", precision: 6, scale: 0 })
  payfk: number;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => AccPv, (accPv) => accPv.accPvDets)
  @JoinColumn([{ name: "PAYVOUFK", referencedColumnName: "payvoupk" }])
  payvoufk: AccPv;
}
