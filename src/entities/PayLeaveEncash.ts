import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";
import { OldtarUsers } from "./OldtarUsers";

@Entity("PAY_LEAVE_ENCASH")
export class PayLeaveEncash {
  //DB_ERROR -> PK
  @Column("number", {
    name: "LEAVE_ENCASHPK",
    primary: true,
    nullable: true,
    precision: 8,
    scale: 0,
  })
  leaveEncashpk: number | null;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("number", { name: "REF_NO", nullable: true, precision: 6, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", {
    name: "TOTAL_LEAVE",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  totalLeave: number | null;

  @Column("number", {
    name: "TAKEN_LEAVE",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  takenLeave: number | null;

  @Column("number", {
    name: "ENCASH_LEAVE",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  encashLeave: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 8, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.payLeaveEncashes)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.payLeaveEncashes)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;
}
