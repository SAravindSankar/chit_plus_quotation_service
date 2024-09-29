import { Column, Entity } from "typeorm";

@Entity("MEMBER")
export class Member {
  @Column("varchar2", { name: "M_NO", nullable: true, length: 40 })
  mNo: string | null;

  @Column("varchar2", { name: "M_NAME", nullable: true, length: 30 })
  mName: string | null;

  @Column("varchar2", { name: "M_SCHEME", nullable: true, length: 8 })
  mScheme: string | null;

  @Column("varchar2", { name: "M_ADR1", nullable: true, length: 30 })
  mAdr1: string | null;

  @Column("varchar2", { name: "M_ADR2", nullable: true, length: 30 })
  mAdr2: string | null;

  @Column("varchar2", { name: "M_TOWN", nullable: true, length: 30 })
  mTown: string | null;

  @Column("date", { name: "M_DOFBIRTH", nullable: true })
  mDofbirth: Date | null;

  @Column("varchar2", { name: "M_DUEDT", nullable: true, length: 40 })
  mDuedt: string | null;

  @Column("varchar2", { name: "M_BONFROM", nullable: true, length: 40 })
  mBonfrom: string | null;

  @Column("date", { name: "M_DATE", nullable: true })
  mDate: Date | null;

  @Column("varchar2", { name: "M_PAIDINT", nullable: true, length: 40 })
  mPaidint: string | null;

  @Column("varchar2", { name: "M_PAIDAMT", nullable: true, length: 40 })
  mPaidamt: string | null;

  @Column("varchar2", { name: "M_PAIDLATE", nullable: true, length: 40 })
  mPaidlate: string | null;

  @Column("date", { name: "M_RPDATE", nullable: true })
  mRpdate: Date | null;

  @Column("varchar2", { name: "M_RPBILL", nullable: true, length: 8 })
  mRpbill: string | null;

  @Column("varchar2", { name: "M_RPMODE", nullable: true, length: 1 })
  mRpmode: string | null;

  @Column("varchar2", { name: "M_IBONUSV", nullable: true, length: 40 })
  mIbonusv: string | null;

  @Column("varchar2", { name: "M_FBONUSPD", nullable: true, length: 40 })
  mFbonuspd: string | null;

  @Column("varchar2", { name: "M_ICMETHOD", nullable: true, length: 40 })
  mIcmethod: string | null;

  @Column("varchar2", { name: "M_ICRATE", nullable: true, length: 40 })
  mIcrate: string | null;

  @Column("varchar2", { name: "M_LABEL", nullable: true, length: 1 })
  mLabel: string | null;

  @Column("number", { name: "M_DEL", nullable: true, precision: 5, scale: 0 })
  mDel: number | null;

  @Column("varchar2", { name: "M_REMARK", nullable: true, length: 60 })
  mRemark: string | null;

  @Column("varchar2", { name: "M_RPCASHBK", nullable: true, length: 6 })
  mRpcashbk: string | null;

  @Column("varchar2", { name: "M_RPREMARK", nullable: true, length: 20 })
  mRpremark: string | null;

  @Column("varchar2", { name: "M_BIRTHDAY", nullable: true, length: 40 })
  mBirthday: string | null;

  @Column("number", {
    name: "M_CUADRADD",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  mCuadradd: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
