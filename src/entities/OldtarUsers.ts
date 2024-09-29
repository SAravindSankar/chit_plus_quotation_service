import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { AccPv } from "./AccPv";
import { ChitColl } from "./ChitColl";
import { ChitGrp } from "./ChitGrp";
import { ChitMembers } from "./ChitMembers";
import { HrAppOrd } from "./HrAppOrd";
import { JissVou } from "./JissVou";
import { OldtarGroups } from "./OldtarGroups";
import { MasBranch } from "./MasBranch";
import { PayLeaveEncash } from "./PayLeaveEncash";

@Index("TARUSERSPK", ["tarsuserspk"], { unique: true })
@Entity("OLDTAR_USERS")
export class OldtarUsers {
  @Column("number", {
    primary: true,
    name: "TARSUSERSPK",
    precision: 4,
    scale: 0,
  })
  tarsuserspk: number;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("varchar2", { name: "USER_ID", length: 10 })
  userId: string;

  @Column("varchar2", { name: "PASSWORD", length: 10 })
  password: string;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(() => AccPv, (accPv) => accPv.cbyfk)
  accPvs: AccPv[];

  @OneToMany(() => AccPv, (accPv) => accPv.mbyfk)
  accPvs2: AccPv[];

  @OneToMany(() => ChitColl, (chitColl) => chitColl.cbyfk)
  chitColls: ChitColl[];

  @OneToMany(() => ChitColl, (chitColl) => chitColl.mbyfk)
  chitColls2: ChitColl[];

  @OneToMany(() => ChitGrp, (chitGrp) => chitGrp.mbyfk)
  chitGrps: ChitGrp[];

  @OneToMany(() => ChitGrp, (chitGrp) => chitGrp.cbyfk)
  chitGrps2: ChitGrp[];

  @OneToMany(() => ChitMembers, (chitMembers) => chitMembers.mbyfk)
  chitMembers: ChitMembers[];

  @OneToMany(() => HrAppOrd, (hrAppOrd) => hrAppOrd.cbyfk)
  hrAppOrds: HrAppOrd[];

  @OneToMany(() => HrAppOrd, (hrAppOrd) => hrAppOrd.mbyfk)
  hrAppOrds2: HrAppOrd[];

  @OneToMany(() => JissVou, (jissVou) => jissVou.cbyfk)
  jissVous: JissVou[];

  @OneToMany(() => JissVou, (jissVou) => jissVou.mbyfk)
  jissVous2: JissVou[];

  @ManyToOne(() => OldtarGroups, (oldtarGroups) => oldtarGroups.oldtarUsers)
  @JoinColumn([{ name: "TARGROUPFK", referencedColumnName: "targrouppk" }])
  targroupfk: OldtarGroups;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.oldtarUsers)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @OneToMany(() => PayLeaveEncash, (payLeaveEncash) => payLeaveEncash.cbyfk)
  payLeaveEncashes: PayLeaveEncash[];
}
