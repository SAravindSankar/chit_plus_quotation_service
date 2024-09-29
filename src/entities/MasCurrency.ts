import { Column, Entity, Index } from "typeorm";

@Index("CURRPK", ["currpk"], { unique: true })
@Index("NAME", ["delflag", "name"], { unique: true })
@Entity("MAS_CURRENCY")
export class MasCurrency {
  @Column("number", { primary: true, name: "CURRPK", precision: 4, scale: 0 })
  currpk: number;

  @Column("char", { name: "CODE", unique: true, length: 3 })
  code: string;

  @Column("varchar2", { name: "NAME", unique: true, length: 15 })
  name: string;

  @Column("number", { name: "EX_RATE", precision: 7, scale: 2 })
  exRate: number;

  @Column("number", { name: "EX_RATIO", precision: 10, scale: 2 })
  exRatio: number;

  @Column("date", { name: "UDATE" })
  udate: Date;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "TC_RATE", nullable: true, precision: 7, scale: 2 })
  tcRate: number | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "DATE_TIME", nullable: true, length: 25 })
  dateTime: string | null;
}
