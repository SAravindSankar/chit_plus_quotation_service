import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasBranch } from "./MasBranch";

@Index("COUNTERPK", ["counterpk"], { unique: true })
@Index("CTR_NO2", ["delflag", "branchfk", "ctrNo"], { unique: true })
@Entity("MAS_COUNTER")
export class MasCounter {
  @Column("number", {
    primary: true,
    name: "COUNTERPK",
    precision: 4,
    scale: 0,
  })
  counterpk: number;

  @Column("char", { name: "CTR_NO", unique: true, length: 3 })
  ctrNo: string;

  @Column("varchar2", { name: "LOCATION", length: 15 })
  location: string;

  @Column("varchar2", { name: "SECTION", length: 15 })
  section: string;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("number", { name: "BRANCHFK", unique: true, precision: 4, scale: 0 })
  branchfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "BILL_NO", nullable: true, precision: 5, scale: 0 })
  billNo: number | null;

  @Column("number", {
    name: "SER_BILL_NO",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  serBillNo: number | null;

  @Column("varchar2", { name: "CASHCODE", nullable: true, length: 6 })
  cashcode: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masCounters)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;
}
