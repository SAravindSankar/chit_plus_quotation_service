import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { ChitClrc } from "./ChitClrc";
import { ChitColl } from "./ChitColl";
import { ChitGrp } from "./ChitGrp";
import { OldtarUsers } from "./OldtarUsers";
import { MasAccounts } from "./MasAccounts";
import { MasCompany } from "./MasCompany";
import { Dup } from "./Dup";
import { MasDoc } from "./MasDoc";

@Index("CHITIND1", ["memberNo", "chitGrpfk", "companyfk", "delflag"], {})
@Index("CHIT_MEMBERPK", ["chitMemberpk"], { unique: true })
@Entity("CHIT_MEMBERS")
export class ChitMembers {
  @Column("number", {
    primary: true,
    name: "CHIT_MEMBERPK",
    precision: 8,
    scale: 0,
  })
  chitMemberpk: number;

  @Column("varchar2", { name: "MEMBER_NO", nullable: true, length: 13 })
  memberNo: string | null;

  @Column("date", { name: "JOIN_DATE", nullable: true })
  joinDate: Date | null;

  @Column("date", { name: "MAT_DATE", nullable: true })
  matDate: Date | null;

  @Column("char", { name: "GIFT", nullable: true, length: 1 })
  gift: string | null;

  @Column("number", {
    name: "CHIT_GRPFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  chitGrpfk: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "CHIT_ST", nullable: true, length: 1 })
  chitSt: string | null;

  @Column("number", { name: "MAT_AMT", nullable: true, precision: 8, scale: 2 })
  matAmt: number | null;

  @Column("number", {
    name: "CLOSE_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  closeAmt: number | null;

  @Column("number", { name: "CUSTPK", nullable: true, precision: 6, scale: 0 })
  custpk: number | null;

  @Column("number", { name: "ADJ_AMT", nullable: true, precision: 8, scale: 2 })
  adjAmt: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("date", { name: "CLOSE_DATE", nullable: true })
  closeDate: Date | null;

  @Column("char", { name: "ADDLESS1", nullable: true, length: 1 })
  addless1: string | null;

  @Column("char", { name: "ADDLESS2", nullable: true, length: 1 })
  addless2: string | null;

  @Column("number", { name: "ALAMT1", nullable: true, precision: 8, scale: 2 })
  alamt1: number | null;

  @Column("number", { name: "ALAMT2", nullable: true, precision: 8, scale: 2 })
  alamt2: number | null;

  @Column("char", { name: "BILLED", nullable: true, length: 1 })
  billed: string | null;

  @Column("char", { name: "SEX", nullable: true, length: 1 })
  sex: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 50 })
  remarks: string | null;

  @Column("char", { name: "REF_IND", nullable: true, length: 1 })
  refInd: string | null;

  @Column("number", {
    name: "OTHCOMP_ADJAMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  othcompAdjamt: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("number", {
    name: "ADJ_GIFTVAL",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  adjGiftval: number | null;

  @Column("number", {
    name: "GIFT_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  giftValue: number | null;

  @Column("number", {
    name: "AGARAMID",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  agaramid: number | null;

  @Column("char", { name: "AGARAMST", nullable: true, length: 1 })
  agaramst: string | null;

  @Column("char", { name: "SACSST", nullable: true, length: 1 })
  sacsst: string | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @Column("char", { name: "CHIT_CLOSEST", nullable: true, length: 1 })
  chitClosest: string | null;

  @OneToMany(() => ChitClrc, (chitClrc) => chitClrc.chitMemberfk)
  chitClrcs: ChitClrc[];

  @OneToMany(() => ChitColl, (chitColl) => chitColl.chitMemberfk)
  chitColls: ChitColl[];

  @ManyToOne(() => ChitGrp, (chitGrp) => chitGrp.chitMembers)
  @JoinColumn([{ name: "CHIT_GRPFK", referencedColumnName: "chitGrppk" }])
  chitGrpfk2: ChitGrp;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.chitMembers)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.chitMembers)
  @JoinColumn([{ name: "ACCFK1", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.chitMembers2)
  @JoinColumn([{ name: "ACCFK2", referencedColumnName: "accpk" }])
  accfk2: MasAccounts;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.chitMembers)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk2: MasCompany;

  @ManyToOne(() => Dup, (dup) => dup.chitMembers)
  @JoinColumn([{ name: "CUSTFK", referencedColumnName: "custpk" }])
  custfk: Dup;

  @ManyToOne(() => MasDoc, (masDoc) => masDoc.chitMembers)
  @JoinColumn([{ name: "DOCFK", referencedColumnName: "docpk" }])
  docfk: MasDoc;
}
