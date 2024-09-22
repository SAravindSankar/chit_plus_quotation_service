import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OldtarUsers } from "./OldtarUsers";
import { AccPvDet } from "./AccPvDet";

@Index("PAYVOUPK", ["payvoupk"], { unique: true })
@Entity("ACC_PV")
export class AccPv {
  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { primary: true, name: "PAYVOUPK", precision: 8, scale: 0 })
  payvoupk: number;

  @Column("number", { name: "PAYFK", precision: 8, scale: 0 })
  payfk: number;

  @Column("number", { name: "BANK_ACCD", precision: 6, scale: 0 })
  bankAccd: number;

  @Column("number", { name: "FOR_BRANCHFK", precision: 4, scale: 0 })
  forBranchfk: number;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.accPvs)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.accPvs2)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @OneToMany(() => AccPvDet, (accPvDet) => accPvDet.payvoufk)
  accPvDets: AccPvDet[];
}
