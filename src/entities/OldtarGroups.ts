import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OldtarFormusers } from "./OldtarFormusers";
import { MasBranch } from "./MasBranch";
import { OldtarUsers } from "./OldtarUsers";

@Index("TARGROUPNAME", ["delflag", "companyfk", "branchfk", "name"], {
  unique: true,
})
@Index("TARGROUPPK", ["targrouppk"], { unique: true })
@Entity("OLDTAR_GROUPS")
export class OldtarGroups {
  @Column("number", { name: "TARGROUPPK", precision: 4, scale: 0 })
  targrouppk: number;

  @Column("varchar2", {
    primary: true,
    name: "NAME",
    nullable: true,
    length: 20,
  })
  name: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 100 })
  description: string | null;

  @Column("number", {
    primary: true,
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    primary: true,
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
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

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @OneToMany(
    () => OldtarFormusers,
    (oldtarFormusers) => oldtarFormusers.targroupfk
  )
  oldtarFormusers: OldtarFormusers[];

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.oldtarGroups)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk2: MasBranch;

  @OneToMany(() => OldtarUsers, (oldtarUsers) => oldtarUsers.targroupfk)
  oldtarUsers: OldtarUsers[];
}
