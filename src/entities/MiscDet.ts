import { Column, Entity } from "typeorm";

@Entity("MISC_DET")
export class MiscDet {
  @Column("number", {
    name: "MISC_DETPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  miscDetpk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "GLACCFK", nullable: true, precision: 8, scale: 0 })
  glaccfk: number | null;

  @Column("number", { name: "SLACCFK", nullable: true, precision: 6, scale: 0 })
  slaccfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
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
