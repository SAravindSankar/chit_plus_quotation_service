import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";

@Index("CRNDBN_DETPK", ["crndbnDetpk"], { unique: true })
@Entity("ACC_CRNDBN_DET")
export class AccCrndbnDet {
  @Column("number", {
    primary: true,
    name: "CRNDBN_DETPK",
    precision: 8,
    scale: 0,
  })
  crndbnDetpk: number;

  @Column("char", { name: "CRN_DBN", length: 1 })
  crnDbn: string;

  @Column("date", { name: "CRN_DBNFK" })
  crnDbnfk: Date;

  @Column("char", { name: "GLCODE", length: 4 })
  glcode: string;

  @Column("char", { name: "SLCODE", nullable: true, length: 4 })
  slcode: string | null;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "SLACCFK", nullable: true, precision: 8, scale: 0 })
  slaccfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.accCrndbnDets)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;
}
