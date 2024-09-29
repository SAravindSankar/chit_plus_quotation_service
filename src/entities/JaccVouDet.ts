import { Column, Entity, Index } from "typeorm";

@Index("VOU_DETPK", ["vouDetpk"], { unique: true })
@Entity("JACC_VOU_DET")
export class JaccVouDet {
  @Column("number", {
    primary: true,
    name: "VOU_DETPK",
    precision: 8,
    scale: 0,
  })
  vouDetpk: number;

  @Column("number", {
    name: "ACC_VOUFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  accVoufk: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
