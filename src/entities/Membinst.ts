import { Column, Entity } from "typeorm";

@Entity("MEMBINST")
export class Membinst {
  @Column("varchar2", { name: "MI_SCHM", nullable: true, length: 8 })
  miSchm: string | null;

  @Column("varchar2", { name: "MI_MNO", nullable: true, length: 40 })
  miMno: string | null;

  @Column("date", { name: "MI_DATE", nullable: true })
  miDate: Date | null;

  @Column("varchar2", { name: "MI_RCPTNO", nullable: true, length: 40 })
  miRcptno: string | null;

  @Column("varchar2", { name: "MI_INSTNO", nullable: true, length: 40 })
  miInstno: string | null;

  @Column("varchar2", { name: "MI_AMOUNT", nullable: true, length: 40 })
  miAmount: string | null;

  @Column("date", { name: "MI_DUEON", nullable: true })
  miDueon: Date | null;

  @Column("varchar2", { name: "MI_MODE", nullable: true, length: 1 })
  miMode: string | null;

  @Column("varchar2", { name: "MI_CHQNO", nullable: true, length: 20 })
  miChqno: string | null;

  @Column("date", { name: "MI_CHQDT", nullable: true })
  miChqdt: Date | null;

  @Column("varchar2", { name: "MI_BANK", nullable: true, length: 20 })
  miBank: string | null;

  @Column("varchar2", { name: "MI_STATUS", nullable: true, length: 1 })
  miStatus: string | null;

  @Column("varchar2", { name: "MI_FLAG", nullable: true, length: 1 })
  miFlag: string | null;

  @Column("varchar2", { name: "MI_TRNNO", nullable: true, length: 40 })
  miTrnno: string | null;

  @Column("varchar2", { name: "MI_MONO", nullable: true, length: 10 })
  miMono: string | null;

  @Column("date", { name: "MI_MODT", nullable: true })
  miModt: Date | null;

  @Column("number", { name: "MI_POST", nullable: true, precision: 5, scale: 0 })
  miPost: number | null;

  @Column("varchar2", { name: "MI_CASHAC", nullable: true, length: 6 })
  miCashac: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
