import { Column, Entity, Index } from "typeorm";

@Index("DBN_DET15PK", ["dbnDet15Pk"], { unique: true })
@Entity("JPUR_DBN_DET15")
export class JpurDbnDet15 {
  @Column("number", {
    primary: true,
    name: "DBN_DET15PK",
    precision: 8,
    scale: 0,
  })
  dbnDet15Pk: number;

  @Column("number", {
    name: "DBN_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  dbnDet1Fk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 3, scale: 0 })
  pcs: number | null;

  @Column("char", { name: "KARROT", nullable: true, length: 10 })
  karrot: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
