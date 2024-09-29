import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";

@Index("CCARDPK", ["ccardpk"], { unique: true })
@Entity("MAS_CCARD")
export class MasCcard {
  @Column("number", { primary: true, name: "CCARDPK", precision: 6, scale: 0 })
  ccardpk: number;

  @Column("varchar2", { name: "NAME", length: 30 })
  name: string;

  @Column("char", { name: "ACCODE", length: 4 })
  accode: string;

  @Column("varchar2", { name: "CLIENT_NO", length: 20 })
  clientNo: string;

  @Column("varchar2", { name: "ME_NO", nullable: true, length: 20 })
  meNo: string | null;

  @Column("number", {
    name: "COMM_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  commPer: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "BRANCHFK", precision: 4, scale: 0 })
  branchfk: number;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK" })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "BANK_WITH", nullable: true, length: 20 })
  bankWith: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("char", { name: "CHIT", nullable: true, length: 1 })
  chit: string | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masCcards)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masCcards)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;
}
