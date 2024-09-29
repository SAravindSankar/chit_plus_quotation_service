import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007457", ["payCrdrpk"], { unique: true })
@Entity("ACC_PAY_CRDR")
export class AccPayCrdr {
  @Column("number", {
    primary: true,
    name: "PAY_CRDRPK",
    precision: 8,
    scale: 0,
  })
  payCrdrpk: number;

  @Column("number", { name: "PAYFK", precision: 8, scale: 0 })
  payfk: number;

  @Column("char", { name: "CRN_DBN", length: 1 })
  crnDbn: string;

  @Column("number", { name: "CRN_DBNFK", precision: 6, scale: 0 })
  crnDbnfk: number;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

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
