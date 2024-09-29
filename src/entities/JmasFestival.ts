import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasBranch } from "./MasBranch";
import { JmasFestivalDet } from "./JmasFestivalDet";

@Index("SYS_C007669", ["festpk"], { unique: true })
@Entity("JMAS_FESTIVAL")
export class JmasFestival {
  @Column("number", { primary: true, name: "FESTPK", precision: 6, scale: 0 })
  festpk: number;

  @Column("date", { name: "FEST_DATE", nullable: true })
  festDate: Date | null;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 30 })
  description: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.jmasFestivals)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @OneToMany(
    () => JmasFestivalDet,
    (jmasFestivalDet) => jmasFestivalDet.festivalfk
  )
  jmasFestivalDets: JmasFestivalDet[];
}
