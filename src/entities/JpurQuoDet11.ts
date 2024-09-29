import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007735", ["purDet11Pk"], { unique: true })
@Entity("JPUR_QUO_DET11")
export class JpurQuoDet11 {
  @Column("number", {
    primary: true,
    name: "PUR_DET11PK",
    precision: 8,
    scale: 0,
  })
  purDet11Pk: number;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 15 })
  serialNo: string | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "PUR_QUO_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuoDet11Pk: number | null;

  @Column("number", {
    name: "PUR_QUODET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purQuodet1Fk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;
}
