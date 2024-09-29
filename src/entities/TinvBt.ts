import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasBranch } from "./MasBranch";
import { TinvBtnDet } from "./TinvBtnDet";

@Index("TINV_BTNPK", ["tinvBtnpk"], { unique: true })
@Entity("TINV_BT")
export class TinvBt {
  @Column("number", {
    primary: true,
    name: "TINV_BTNPK",
    precision: 8,
    scale: 0,
  })
  tinvBtnpk: number;

  @Column("number", { name: "TINV_BTN_NO", precision: 6, scale: 0 })
  tinvBtnNo: number;

  @Column("date", { name: "TINV_BTN_DATE" })
  tinvBtnDate: Date;

  @Column("char", { name: "BTN_IN_OUT", length: 1 })
  btnInOut: string;

  @Column("number", { name: "BTN_AMT", precision: 10, scale: 2 })
  btnAmt: number;

  @Column("char", { name: "BTN_ST", nullable: true, length: 1 })
  btnSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

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

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tinvBts)
  @JoinColumn([{ name: "BRANCHFK", referencedColumnName: "branchpk" }])
  branchfk: MasBranch;

  @ManyToOne(() => MasBranch, (masBranch) => masBranch.tinvBts2)
  @JoinColumn([{ name: "OT_BRANCHFK", referencedColumnName: "branchpk" }])
  otBranchfk: MasBranch;

  @OneToMany(() => TinvBtnDet, (tinvBtnDet) => tinvBtnDet.tinvBtnfk)
  tinvBtnDets: TinvBtnDet[];
}
