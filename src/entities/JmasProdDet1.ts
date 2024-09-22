import { Column, Entity, Index } from "typeorm";

@Index("JMAS_PROD_DET1PK", ["prodDet1Pk"], { unique: true })
@Entity("JMAS_PROD_DET1")
export class JmasProdDet1 {
  @Column("number", {
    primary: true,
    name: "PROD_DET1PK",
    precision: 8,
    scale: 0,
  })
  prodDet1Pk: number;

  @Column("number", {
    name: "FROM_PRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  fromProdfk: number | null;

  @Column("number", {
    name: "TO_PRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  toProdfk: number | null;

  @Column("number", {
    name: "FROM_COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  fromCompanyfk: number | null;

  @Column("number", {
    name: "TO_COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  toCompanyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
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
}
