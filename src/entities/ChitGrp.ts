import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OldtarUsers } from "./OldtarUsers";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";
import { ChitMembers } from "./ChitMembers";

@Index("CHITGRP_CODE", ["code"], { unique: true })
@Index("CHIT_GRP", ["chitGrppk"], { unique: true })
@Entity("CHIT_GRP")
export class ChitGrp {
  @Column("number", { name: "CHIT_GRPPK", precision: 8, scale: 0 })
  chitGrppk: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Column("number", { name: "PERIOD", nullable: true, precision: 3, scale: 0 })
  period: number | null;

  @Column("number", { name: "NO_INST", nullable: true, precision: 3, scale: 0 })
  noInst: number | null;

  @Column("number", {
    name: "INST_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  instAmt: number | null;

  @Column("number", { name: "INC_AMT", nullable: true, precision: 8, scale: 2 })
  incAmt: number | null;

  @Column("varchar2", { name: "GIFT_DET", nullable: true, length: 50 })
  giftDet: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 8, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "MEMBER_NO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  memberNo: number | null;

  @Column("varchar2", { name: "SUBNAME", nullable: true, length: 50 })
  subname: string | null;

  @Column("varchar2", {
    primary: true,
    name: "CODE",
    nullable: true,
    length: 50,
  })
  code: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 10 })
  shortName: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "INC_CLDT",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  incCldt: number | null;

  @Column("number", {
    name: "LAST_RECNO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  lastRecno: number | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("number", {
    name: "MON_INC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  monIncPer: number | null;

  @Column("number", {
    name: "TOT_INC_PER",
    nullable: true,
    precision: 5,
    scale: 2,
  })
  totIncPer: number | null;

  @Column("number", {
    name: "TOT_INC_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  totIncAmt: number | null;

  @Column("char", { name: "WEIGHT", nullable: true, length: 1 })
  weight: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("date", { name: "INC_CUTOFF_DATE", nullable: true })
  incCutoffDate: Date | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("date", { name: "START_DATE", nullable: true })
  startDate: Date | null;

  @Column("number", {
    name: "GIFT_VALUE",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  giftValue: number | null;

  @Column("char", { name: "CHIT_API", nullable: true, length: 1 })
  chitApi: string | null;

  @Column("char", { name: "SACSST", nullable: true, length: 1 })
  sacsst: string | null;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.chitGrps)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.chitGrps2)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.chitGrps)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.chitGrps)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.chitGrpfk2)
  chitMembers: ChitMembers[];
}
