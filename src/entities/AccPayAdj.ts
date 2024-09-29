import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007445", ["payAdjpk"], { unique: true })
@Entity("ACC_PAY_ADJ")
export class AccPayAdj {
  @Column("number", {
    primary: true,
    name: "PAY_ADJPK",
    precision: 8,
    scale: 0,
  })
  payAdjpk: number;

  @Column("number", { name: "PAYFK", precision: 8, scale: 0 })
  payfk: number;

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

  @Column("varchar2", { name: "SLACCFK", nullable: true, length: 8 })
  slaccfk: string | null;

  @Column("char", { name: "ACCODE", nullable: true, length: 4 })
  accode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
