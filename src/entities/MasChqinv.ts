import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasBank } from "./MasBank";
import { MasBranch } from "./MasBranch";
import { MasDoc } from "./MasDoc";

@Index("CHQINVPK", ["chqinvpk"], { unique: true })
@Entity("MAS_CHQINV")
export class MasChqinv {
  @Column("number", { primary: true, name: "CHQINVPK", precision: 6, scale: 0 })
  chqinvpk: number;

  @Column("char", { name: "CHQ_NO", unique: true, length: 6 })
  chqNo: string;

  @Column("char", { name: "CHQ_ST", nullable: true, length: 1 })
  chqSt: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 4, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("date", { name: "CHQ_DATE", nullable: true })
  chqDate: Date | null;

  @Column("number", { name: "PAYFK", nullable: true, precision: 8, scale: 0 })
  payfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "TRAN_TYPE", nullable: true, length: 3 })
  tranType: string | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masChqinvs)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasBank, (masBank) => masBank.masChqinvs)
  @JoinColumn([{ name: "BANKFK", referencedColumnName: "bankpk" }])
  bankfk: MasBank;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.masChqinvs)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.masChqinvs)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
