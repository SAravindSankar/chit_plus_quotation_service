import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007510", ["calAveRatepk"], { unique: true })
@Entity("CAL_AVE_RATE")
export class CalAveRate {
  @Column("number", {
    primary: true,
    name: "CAL_AVE_RATEPK",
    precision: 4,
    scale: 0,
  })
  calAveRatepk: number;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("char", { name: "PROD_CAT", nullable: true, length: 2 })
  prodCat: string | null;

  @Column("char", { name: "IS_PUR_AMT", nullable: true, length: 1 })
  isPurAmt: string | null;

  @Column("char", { name: "IS_PUR_WT", nullable: true, length: 1 })
  isPurWt: string | null;

  @Column("char", { name: "IS_REC_AMT", nullable: true, length: 1 })
  isRecAmt: string | null;

  @Column("char", { name: "IS_REC_WT", nullable: true, length: 1 })
  isRecWt: string | null;

  @Column("char", { name: "IS_ISS_WT", nullable: true, length: 1 })
  isIssWt: string | null;

  @Column("char", { name: "IS_WWT", nullable: true, length: 1 })
  isWwt: string | null;

  @Column("char", { name: "IS_OP", nullable: true, length: 1 })
  isOp: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
