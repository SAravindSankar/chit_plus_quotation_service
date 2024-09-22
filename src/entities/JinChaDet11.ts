import { Column, Entity, Index } from "typeorm";

@Index("IN_CHA_DET11PK", ["inChaDet11Pk"], { unique: true })
@Entity("JIN_CHA_DET11")
export class JinChaDet11 {
  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    primary: true,
    name: "IN_CHA_DET11PK",
    precision: 8,
    scale: 0,
  })
  inChaDet11Pk: number;

  @Column("number", {
    name: "IN_CHA_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  inChaDet1Fk: number | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 20 })
  serialNo: string | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;
}
