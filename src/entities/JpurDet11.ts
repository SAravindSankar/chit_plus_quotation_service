import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JpurDet1 } from "./JpurDet1";

@Index("PUR_DET11PK", ["purDet11Pk"], { unique: true })
@Entity("JPUR_DET11")
export class JpurDet11 {
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
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JpurDet1, (jpurDet1) => jpurDet1.jpurDets)
  @JoinColumn([{ name: "PUR_DET1FK", referencedColumnName: "purDet1Pk" }])
  purDet1Fk: JpurDet1;
}
