import { Column, Entity, Index } from "typeorm";

@Index("DBN_DET14PK", ["dbnDet14Pk"], { unique: true })
@Entity("JPUR_DBN_DET14")
export class JpurDbnDet14 {
  @Column("number", {
    primary: true,
    name: "DBN_DET14PK",
    precision: 8,
    scale: 0,
  })
  dbnDet14Pk: number;

  @Column("number", {
    name: "DBN_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  dbnDet1Fk: number | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 20 })
  serialNo: string | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
