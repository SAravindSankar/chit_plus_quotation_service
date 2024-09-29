import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasBranch } from "./MasBranch";
import { TinvAdjDet } from "./TinvAdjDet";

@Index("TINV_ADJPK", ["tinvAdjpk"], { unique: true })
@Entity("TINV_ADJ")
export class TinvAdj {
  @Column("number", {
    primary: true,
    name: "TINV_ADJPK",
    precision: 8,
    scale: 0,
  })
  tinvAdjpk: number;

  @Column("number", { name: "TINV_ADJ_NO", precision: 6, scale: 0 })
  tinvAdjNo: number;

  @Column("date", { name: "TINV_ADJ_DATE" })
  tinvAdjDate: Date;

  @Column("char", { name: "ADJ_ADD_LESS", length: 1 })
  adjAddLess: string;

  @Column("number", { name: "ADJ_AMT", precision: 10, scale: 2 })
  adjAmt: number;

  @Column("char", { name: "ADJ_ST", nullable: true, length: 1 })
  adjSt: string | null;

  @Column("varchar2", { name: "REMARKS", length: 100 })
  remarks: string;

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

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tinvAdjs)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @OneToMany(() => TinvAdjDet, (tinvAdjDet) => tinvAdjDet.tinvAdjfk)
  tinvAdjDets: TinvAdjDet[];
}
