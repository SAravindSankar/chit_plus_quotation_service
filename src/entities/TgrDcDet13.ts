import { Column, Entity } from "typeorm";

@Entity("TGR_DC_DET13")
export class TgrDcDet13 {
  @Column("number", {
    name: "TGR_DC_DET13PK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet13Pk: number | null;

  @Column("number", {
    name: "TGR_DC_DET1FK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tgrDcDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 10, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", {
    name: "ROWNUMBER",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  rownumber: number | null;

  @Column("number", {
    name: "TYPE_DOCGENPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  typeDocgenpk: number | null;
}
