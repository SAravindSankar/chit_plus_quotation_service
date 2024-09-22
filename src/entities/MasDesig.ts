import { Column, Entity, Index, OneToMany } from "typeorm";
import { HrAppOrd } from "./HrAppOrd";

@Index("DESIGNATION", ["delflag", "companyfk", "designation"], { unique: true })
@Index("DESIGPK", ["desigpk"], { unique: true })
@Entity("MAS_DESIG")
export class MasDesig {
  @Column("number", { name: "DESIGPK", precision: 8, scale: 0 })
  desigpk: number;

  @Column("varchar2", { primary: true, name: "DESIGNATION", length: 20 })
  designation: string;

  @Column("char", { name: "GRADE", length: 2 })
  grade: string;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    precision: 4,
    scale: 0,
  })
  companyfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => HrAppOrd, (hrAppOrd) => hrAppOrd.desigfk)
  hrAppOrds: HrAppOrd[];
}
