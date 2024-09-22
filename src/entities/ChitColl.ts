import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasAccounts } from "./MasAccounts";
import { OldtarUsers } from "./OldtarUsers";
import { ChitMembers } from "./ChitMembers";
import { MasCompany } from "./MasCompany";
import { Dup } from "./Dup";
import { ChitCollDet } from "./ChitCollDet";

@Index("CHIT_COLLPK", ["chitCollpk"], { unique: true })
@Entity("CHIT_COLL")
export class ChitColl {
  @Column("number", {
    primary: true,
    name: "CHIT_COLLPK",
    precision: 8,
    scale: 0,
  })
  chitCollpk: number;

  @Column("number", { name: "REC_NO", precision: 5, scale: 0 })
  recNo: number;

  @Column("date", { name: "REC_DATE" })
  recDate: Date;

  @Column("number", { name: "CUSTPK", nullable: true, precision: 6, scale: 0 })
  custpk: number | null;

  @Column("varchar2", { name: "REF_ACC", nullable: true, length: 20 })
  refAcc: string | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 50 })
  refNo: string | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "MODE_PAY", nullable: true, length: 15 })
  modePay: string | null;

  @Column("char", { name: "COLL_STATUS", nullable: true, length: 1 })
  collStatus: string | null;

  @Column("varchar2", { name: "BANK_NAME", nullable: true, length: 30 })
  bankName: string | null;

  @Column("varchar2", { name: "BANK_BRANCH", nullable: true, length: 25 })
  bankBranch: string | null;

  @Column("number", { name: "BANKFK", nullable: true, precision: 6, scale: 0 })
  bankfk: number | null;

  @Column("char", { name: "INC_IND", nullable: true, length: 1 })
  incInd: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 8, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 8, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 8, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "COUNTERFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  counterfk: number | null;

  @Column("varchar2", { name: "AGARAM_ID", nullable: true, length: 12 })
  agaramId: string | null;

  @Column("number", {
    name: "AGARAM_REC_NO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  agaramRecNo: number | null;

  @Column("char", { name: "SACSST", nullable: true, length: 1 })
  sacsst: string | null;

  @Column("char", { name: "STATUS", nullable: true, length: 1 })
  status: string | null;

  @ManyToOne(() => MasAccounts, (masAccounts) => masAccounts.chitColls)
  @JoinColumn([{ name: "ACCFK", referencedColumnName: "accpk" }])
  accfk: MasAccounts;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.chitColls)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.chitColls2)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @ManyToOne(() => ChitMembers, (chitMembers) => chitMembers.chitColls)
  @JoinColumn([{ name: "CHIT_MEMBERFK", referencedColumnName: "chitMemberpk" }])
  chitMemberfk: ChitMembers;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.chitColls)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => Dup, (dup) => dup.chitColls)
  @JoinColumn([{ name: "CUSTFK", referencedColumnName: "custpk" }])
  custfk: Dup;

  @OneToMany(() => ChitCollDet, (chitCollDet) => chitCollDet.chitCollfk)
  chitCollDets: ChitCollDet[];
}
