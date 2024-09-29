import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007499", ["recPurpk"], { unique: true })
@Entity("ACC_REC_PUR")
export class AccRecPur {
  @Column("number", {
    primary: true,
    name: "REC_PURPK",
    precision: 8,
    scale: 0,
  })
  recPurpk: number;

  @Column("number", { name: "RECFK", precision: 8, scale: 0 })
  recfk: number;

  @Column("char", { name: "GRN_INDENT", length: 1 })
  grnIndent: string;

  @Column("number", { name: "GRN_INDENTFK", precision: 6, scale: 0 })
  grnIndentfk: number;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
