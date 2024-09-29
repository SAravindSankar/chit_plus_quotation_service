import { Column, Entity, Index } from "typeorm";

@Index("TSAL_DC_DET11PK", ["tsalDcDet11Pk"], { unique: true })
@Entity("TSAL_DC_DET11")
export class TsalDcDet11 {
  @Column("varchar2", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 10, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", {
    name: "ONWHICH",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  onwhich: number | null;

  @Column("number", {
    name: "PER_AGE",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  perAge: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("varchar2", { name: "TFERFK", nullable: true, length: 10 })
  tferfk: string | null;

  @Column("varchar2", { name: "CFERFK", nullable: true, length: 10 })
  cferfk: string | null;

  @Column("varchar2", { name: "DOWNFK", nullable: true, length: 10 })
  downfk: string | null;

  @Column("number", {
    primary: true,
    name: "TSAL_DC_DET11PK",
    precision: 10,
    scale: 0,
  })
  tsalDcDet11Pk: number;

  @Column("number", {
    name: "TSAL_DC_DET1FK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tsalDcDet1Fk: number | null;
}
