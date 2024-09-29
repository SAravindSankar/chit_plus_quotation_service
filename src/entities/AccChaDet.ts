import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007430", ["chaDetpk"], { unique: true })
@Entity("ACC_CHA_DET")
export class AccChaDet {
  @Column("number", {
    primary: true,
    name: "CHA_DETPK",
    precision: 8,
    scale: 0,
  })
  chaDetpk: number;

  @Column("number", { name: "CHAFK", precision: 8, scale: 0 })
  chafk: number;

  @Column("number", { name: "RECFK", precision: 6, scale: 0 })
  recfk: number;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

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
