import { Column, Entity } from "typeorm";

@Entity("TGR_DC_DET12")
export class TgrDcDet12 {
  @Column("number", {
    name: "TGR_DC_DET12PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet12Pk: number | null;

  @Column("number", {
    name: "TGR_DC_DET1FK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet1Fk: number | null;

  @Column("varchar2", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 10,
    scale: 3,
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
    precision: 10,
    scale: 3,
  })
  forUnit: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;
}
