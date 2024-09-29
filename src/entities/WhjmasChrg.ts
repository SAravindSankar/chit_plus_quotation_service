import { Column, Entity, Index } from "typeorm";

@Index("WHCHRG_DETPK", ["whchrgDetpk"], { unique: true })
@Entity("WHJMAS_CHRG")
export class WhjmasChrg {
  @Column("number", {
    primary: true,
    name: "WHCHRG_DETPK",
    precision: 8,
    scale: 0,
  })
  whchrgDetpk: number;

  @Column("number", { name: "PARTYFK", nullable: true, precision: 8, scale: 0 })
  partyfk: number | null;

  @Column("number", { name: "REF_NO", nullable: true, precision: 8, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("date", { name: "EFF_DATE", nullable: true })
  effDate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("char", { name: "REC_IND", nullable: true, length: 1 })
  recInd: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "PCS_CAL_IND", nullable: true, length: 1 })
  pcsCalInd: string | null;
}
