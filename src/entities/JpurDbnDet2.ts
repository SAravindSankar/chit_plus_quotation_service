import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007720", ["dbnDet2Pk"], { unique: true })
@Entity("JPUR_DBN_DET2")
export class JpurDbnDet2 {
  @Column("number", {
    primary: true,
    name: "DBN_DET2PK",
    precision: 8,
    scale: 0,
  })
  dbnDet2Pk: number;

  @Column("number", { name: "DBNFK", nullable: true, precision: 8, scale: 0 })
  dbnfk: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "PER_AGE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  perAge: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

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
}
