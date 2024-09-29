import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007712", ["schPk"], { unique: true })
@Entity("JMAS_SCHEME")
export class JmasScheme {
  @Column("number", { primary: true, name: "SCH_PK", precision: 6, scale: 0 })
  schPk: number;

  @Column("number", { name: "REF_NO", nullable: true, precision: 5, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("varchar2", { name: "SCH_NAME", nullable: true, length: 40 })
  schName: string | null;

  @Column("char", { name: "SCH_TYPE", nullable: true, length: 1 })
  schType: string | null;

  @Column("char", { name: "GIFT_TYPE", nullable: true, length: 1 })
  giftType: string | null;

  @Column("date", { name: "PERIOD_FROM", nullable: true })
  periodFrom: Date | null;

  @Column("date", { name: "PERIOD_TO", nullable: true })
  periodTo: Date | null;

  @Column("char", { name: "SCH_ST", nullable: true, length: 1 })
  schSt: string | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

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

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
