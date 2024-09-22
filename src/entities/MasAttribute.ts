import { Column, Entity, Index } from "typeorm";

@Index("ATTRPK", ["attrpk"], { unique: true })
@Entity("MAS_ATTRIBUTE")
export class MasAttribute {
  @Column("number", { primary: true, name: "ATTRPK", precision: 10, scale: 0 })
  attrpk: number;

  @Column("number", {
    name: "MAS_GENERALFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  masGeneralfk: number | null;

  @Column("varchar2", { name: "ATTR_NAME", nullable: true, length: 40 })
  attrName: string | null;

  @Column("varchar2", { name: "ATTR_SHORT_NAME", nullable: true, length: 5 })
  attrShortName: string | null;

  @Column("varchar2", { name: "ATTR_DESCRIPTION", nullable: true, length: 100 })
  attrDescription: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;
}
