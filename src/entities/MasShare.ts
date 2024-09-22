import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008189", ["sharepk"], { unique: true })
@Entity("MAS_SHARE")
export class MasShare {
  @Column("number", { primary: true, name: "SHAREPK", precision: 6, scale: 0 })
  sharepk: number;

  @Column("number", { name: "ACCFK", nullable: true, precision: 8, scale: 0 })
  accfk: number | null;

  @Column("number", { name: "RATIO", nullable: true, precision: 5, scale: 2 })
  ratio: number | null;

  @Column("char", { name: "FIN_YEAR", nullable: true, length: 4 })
  finYear: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 7, scale: 2 })
  amount: number | null;

  @Column("char", { name: "SHARE_ST", nullable: true, length: 1 })
  shareSt: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "SHARE_VALUE",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  shareValue: number | null;

  @Column("varchar2", { name: "SHARE_TYPE", nullable: true, length: 15 })
  shareType: string | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
