import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";
import { MasChqinv } from "./MasChqinv";

@Index("BANKACCD", ["delflag", "companyfk", "accode"], { unique: true })
@Index("BANKNAME", ["delflag", "companyfk", "name"], { unique: true })
@Index("BANKPK", ["bankpk"], { unique: true })
@Entity("MAS_BANK")
export class MasBank {
  @Column("number", { name: "BANKPK", precision: 8, scale: 0 })
  bankpk: number;

  @Column("char", { primary: true, name: "ACCODE", length: 4 })
  accode: string;

  @Column("varchar2", { name: "NAME", unique: true, length: 40 })
  name: string;

  @Column("varchar2", { name: "BRANCH", length: 30 })
  branch: string;

  @Column("number", { name: "OP_BAL", nullable: true, precision: 12, scale: 2 })
  opBal: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    precision: 4,
    scale: 0,
  })
  companyfk: number;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("number", { name: "MBYFK", precision: 8, scale: 0 })
  mbyfk: number;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true, precision: 8, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("varchar2", { name: "BACCNO", nullable: true, length: 20 })
  baccno: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.masBanks)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masBanks)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @OneToMany(() => MasChqinv, (masChqinv) => masChqinv.bankfk)
  masChqinvs: MasChqinv[];
}
