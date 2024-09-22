import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007478", ["recAdjpk"], { unique: true })
@Entity("ACC_REC_ADJ")
export class AccRecAdj {
  @Column("number", {
    primary: true,
    name: "REC_ADJPK",
    precision: 8,
    scale: 0,
  })
  recAdjpk: number;

  @Column("number", { name: "RECFK", precision: 8, scale: 0 })
  recfk: number;

  @Column("char", { name: "ADD_LESS", length: 1 })
  addLess: string;

  @Column("char", { name: "SLCODE", nullable: true, length: 4 })
  slcode: string | null;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "SLACCFK", nullable: true, precision: 8, scale: 0 })
  slaccfk: number | null;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
