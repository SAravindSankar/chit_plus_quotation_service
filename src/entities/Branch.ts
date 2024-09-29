import "reflect-metadata";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Company } from "./Company";

@Entity({ synchronize: false })
export class Branch {
  @PrimaryGeneratedColumn()
  branchpk?: number; // BRANCHPK NOT NULL NUMBER(4)

  @Column({ type: "varchar2", length: 40, nullable: true })
  name?: string; // NAME NOT NULL VARCHAR2(40)

  @Column({ type: "varchar2", length: 100, nullable: true })
  address?: string; // ADDRESS NOT NULL VARCHAR2(100)

  @Column({ type: "varchar2", length: 20, nullable: true })
  city?: string; // CITY NOT NULL VARCHAR2(20)

  @Column({ type: "varchar2", length: 20, nullable: true })
  state?: string; // STATE VARCHAR2(20)

  @Column({ type: "varchar2", length: 6, nullable: true })
  pincode?: string; // PINCODE VARCHAR2(6)

  @Column({ type: "varchar2", length: 25, nullable: true })
  phone?: string; // PHONE NOT NULL VARCHAR2(25)

  @Column({ type: "varchar2", length: 25, nullable: true })
  fax?: string; // FAX VARCHAR2(25)

  @Column({ type: "varchar2", length: 40, nullable: true })
  email?: string; // EMAIL VARCHAR2(40)

  @Column({ type: "varchar2", length: 25, nullable: true })
  cperson?: string; // CPERSON VARCHAR2(25)

  @Column({ type: "varchar2", length: 25, nullable: true })
  cdept?: string; // CDEPT VARCHAR2(25)

  @Column({ type: "raw", length: 16 })
  rrowid?: Buffer; // RROWID NOT NULL RAW(16 BYTE)

  @Column({ type: "number", precision: 4, scale: 0, nullable: true })
  companyfk?: number; // COMPANYFK NOT NULL NUMBER(4)

  @Column({ type: "number", precision: 4, scale: 0, nullable: true })
  cbyfk?: number; // CBYFK NUMBER(4)

  @Column({ type: "date", nullable: true })
  cdate?: Date; // CDATE DATE

  @Column({ type: "number", precision: 4, scale: 0, nullable: true })
  mbyfk?: number; // MBYFK NUMBER(4)

  @Column({ type: "date", nullable: true })
  mdate?: Date; // MDATE DATE

  @Column({ type: "number", precision: 0, scale: 0, nullable: true })
  abyfk?: number; // ABYFK NUMBER

  @Column({ type: "date", nullable: true })
  adate?: Date; // ADATE DATE

  @Column({ type: "varchar2", length: 20, nullable: true })
  delflag?: string; // DELFLAG VARCHAR2(20)

  @Column({ type: "varchar2", length: 10, nullable: true })
  shortname?: string; // SHORTNAME VARCHAR2(10)

  @Column({ type: "date", nullable: true })
  updDateTime?: Date; // UPD_DATE_TIME DATE

  @Column({ type: "date", nullable: true })
  dayCloseProc?: Date; // DAY_CLOSE_PROC DATE

  @Column({ type: "date", nullable: true })
  dayCloseBkup?: Date; // DAY_CLOSE_BKUP DATE

  @Column({ type: "varchar2", length: 25, nullable: true })
  mobileNo?: string; // MOBILE_NO VARCHAR2(25)

  @Column({ type: "date", nullable: true })
  dayCloseInit?: Date; // DAY_CLOSE_INIT DATE

  @Column({ type: "varchar2", length: 30, nullable: true })
  branchSign?: string; // BRANCHSIGN VARCHAR2(30)

  @Column({ type: "char", length: 1, nullable: true })
  daySession?: string; // DAY_SESSION CHAR(1)

  @Column({ type: "char", length: 1, nullable: true })
  sessCloseInit?: string; // SESS_CLOSE_INIT CHAR(1)

  @Column({ type: "char", length: 1, nullable: true })
  sessCloseProc?: string; // SESS_CLOSE_PROC CHAR(1)

  @Column({ type: "char", length: 1, nullable: true })
  sessCloseBkup?: string; // SESS_CLOSE_BKUP CHAR(1)

  @Column({ type: "varchar2", length: 10, nullable: true })
  rephead?: string; // REPHEAD VARCHAR2(10)

  @Column({ type: "char", length: 1, nullable: true })
  oeflg?: string; // OEFLG CHAR(1)

  @Column({ type: "date", nullable: true })
  dayCloseBkup2?: Date; // DAY_CLOSE_BKUP2 DATE

  @Column({ type: "char", length: 1, nullable: true })
  bkType?: string; // BK_TYPE CHAR(1)

  @Column({ type: "date", nullable: true })
  dayCloseBkupShow?: Date; // DAY_CLOSE_BKUP_SHOW DATE

  @Column({ type: "varchar2", length: 60, nullable: true })
  narr1?: string; // NARR1 VARCHAR2(60)

  @Column({ type: "varchar2", length: 30, nullable: true })
  narr2?: string; // NARR2 VARCHAR2(30)

  @Column({ type: "varchar2", length: 15, nullable: true })
  unitpfcode?: string; // UNITPFCODE VARCHAR2(15)

  @Column({ type: "varchar2", length: 2, nullable: true })
  code?: string; // CODE VARCHAR2(2)

  @Column({ type: "char", length: 1, nullable: true })
  corpBran?: string; // CORP_BRAN CHAR(1)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  tferfk?: number; // TFERFK NUMBER(10)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  cferfk?: number; // CFERFK NUMBER(10)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  downfk?: number; // DOWNFK NUMBER(10)

  @Column({ type: "char", length: 1, nullable: true })
  mergeStarplus?: string; // MERGE_STARPLUS CHAR(1)

  @Column({ type: "varchar2", length: 6, nullable: true })
  pin?: string; // PIN VARCHAR2(6)

  @ManyToOne(() => Company)
  @JoinColumn({ name: "companyfk" })
  company?: Company;
}
