import { Column, Entity } from "typeorm";

@Entity("OLD_ACC_JV_CONT")
export class OldAccJvCont {
  @Column("number", { name: "JCPK", nullable: true, precision: 8, scale: 0 })
  jcpk: number | null;

  @Column("number", { name: "JC_NO", nullable: true, precision: 6, scale: 0 })
  jcNo: number | null;

  @Column("date", { name: "JC_DATE", nullable: true })
  jcDate: Date | null;

  @Column("number", { name: "DR_AMT", nullable: true, precision: 12, scale: 2 })
  drAmt: number | null;

  @Column("number", { name: "CR_AMT", nullable: true, precision: 12, scale: 2 })
  crAmt: number | null;

  @Column("char", { name: "JC_IND", nullable: true, length: 1 })
  jcInd: string | null;

  @Column("char", { name: "JC_ST", nullable: true, length: 1 })
  jcSt: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;
}
