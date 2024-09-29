import { Column, Entity, Index } from "typeorm";

@Index("DIA_RATEPK", ["diaRatepk"], { unique: true })
@Entity("MAS_DIA_RATE")
export class MasDiaRate {
  @Column("number", {
    primary: true,
    name: "DIA_RATEPK",
    precision: 8,
    scale: 0,
  })
  diaRatepk: number;

  @Column("number", { name: "REF_NO", nullable: true, precision: 5, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("date", { name: "EFF_DATE", nullable: true })
  effDate: Date | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("char", { name: "DIA_ST", nullable: true, length: 1 })
  diaSt: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

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

  @Column("char", {
    name: "SAL_PUR",
    nullable: true,
    length: 1,
    default: () => "' '",
  })
  salPur: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
