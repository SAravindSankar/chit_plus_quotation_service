import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { JmasCharges } from "./JmasCharges";

@Index("SYS_C007683", ["otherChrgpk"], { unique: true })
@Entity("JMAS_OTHER_CHRG")
export class JmasOtherChrg {
  @Column("number", {
    primary: true,
    name: "OTHER_CHRGPK",
    precision: 6,
    scale: 0,
  })
  otherChrgpk: number;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "FROM_WT", nullable: true, precision: 8, scale: 3 })
  fromWt: number | null;

  @Column("number", { name: "TO_WT", nullable: true, precision: 8, scale: 3 })
  toWt: number | null;

  @Column("number", {
    name: "TYPE_RATE",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typeRate: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", { name: "TYPE_WT", nullable: true, precision: 8, scale: 3 })
  typeWt: number | null;

  @Column("number", {
    name: "ADD_RATE_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  addRatePer: number | null;

  @Column("number", {
    name: "ADD_RATE_AMT",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  addRateAmt: number | null;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JmasCharges, (jmasCharges) => jmasCharges.jmasOtherChrgs)
  @JoinColumn([{ name: "CHRGFK", referencedColumnName: "chrgpk" }])
  chrgfk: JmasCharges;
}
