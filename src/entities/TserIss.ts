import { Column, Entity } from "typeorm";

@Entity("TSER_ISS")
export class TserIss {
  @Column("number", {
    name: "TSER_ISSPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tserIsspk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 10, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "ISS_NO", nullable: true, precision: 10, scale: 0 })
  issNo: number | null;

  @Column("date", { name: "ISS_DATE", nullable: true })
  issDate: Date | null;

  @Column("number", { name: "JCFK", nullable: true, precision: 10, scale: 0 })
  jcfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 10, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "ISS_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  issQty: number | null;

  @Column("number", {
    name: "RET_QTY",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  retQty: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "ISS_ST", nullable: true, length: 1 })
  issSt: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;
}
