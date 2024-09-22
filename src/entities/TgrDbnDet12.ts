import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TgrDbnDet1 } from "./TgrDbnDet1";

@Index("SYS_C0026103", ["tgrDbnDet12Pk"], { unique: true })
@Entity("TGR_DBN_DET12")
export class TgrDbnDet12 {
  @Column("number", {
    primary: true,
    name: "TGR_DBN_DET12PK",
    precision: 8,
    scale: 0,
  })
  tgrDbnDet12Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("number", {
    name: "FOR_UNIT",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  forUnit: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @ManyToOne(() => TgrDbnDet1, (tgrDbnDet1) => tgrDbnDet1.tgrDbnDets)
  @JoinColumn([{ name: "TGR_DBN_DET1FK", referencedColumnName: "tgrDbnDet1" }])
  tgrDbnDet1Fk: TgrDbnDet1;
}
