import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { TgrGrn } from "./TgrGrn";

@Index("SYS_C0026086", ["tgrGrnDet2Pk"], { unique: true })
@Entity("TGR_GRN_DET2")
export class TgrGrnDet2 {
  @Column("number", {
    primary: true,
    name: "TGR_GRN_DET2PK",
    precision: 8,
    scale: 0,
  })
  tgrGrnDet2Pk: number;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  onWhich: number | null;

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
    precision: 10,
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

  @Column("number", { name: "ACCFK", nullable: true, precision: 10, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @ManyToOne(() => TgrGrn, (tgrGrn) => tgrGrn.tgrGrnDets)
  @JoinColumn([{ name: "TGR_GRNFK", referencedColumnName: "tgrGrnpk" }])
  tgrGrnfk: TgrGrn;
}
