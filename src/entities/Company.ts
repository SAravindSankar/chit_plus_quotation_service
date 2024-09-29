import "reflect-metadata";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ synchronize: false })
export class Company {
  @PrimaryGeneratedColumn()
  companypk?: number; // COMPANYPK NOT NULL NUMBER(4)

  @Column({ type: "varchar2", length: 50, nullable: true })
  name?: string; // NAME VARCHAR2(50)

  @Column({ type: "varchar2", length: 100, nullable: true })
  regdAdd?: string; // REGD_ADD VARCHAR2(100)

  @Column({ type: "varchar2", length: 20, nullable: true })
  regdCity?: string; // REGD_CITY VARCHAR2(20)

  @Column({ type: "varchar2", length: 20, nullable: true })
  regdState?: string; // REGD_STATE VARCHAR2(20)

  @Column({ type: "char", length: 6, nullable: true })
  regdPin?: string; // REGD_PIN CHAR(6)

  @Column({ type: "varchar2", length: 25, nullable: true })
  regdPhone?: string; // REGD_PHONE VARCHAR2(25)

  @Column({ type: "varchar2", length: 25, nullable: true })
  regdFax?: string; // REGD_FAX VARCHAR2(25)

  @Column({ type: "varchar2", length: 40, nullable: true })
  regdEmail?: string; // REGD_EMAIL VARCHAR2(40)

  @Column({ type: "varchar2", length: 100, nullable: true })
  coAdd?: string; // CO_ADD VARCHAR2(100)

  @Column({ type: "varchar2", length: 20, nullable: true })
  coCity?: string; // CO_CITY VARCHAR2(20)

  @Column({ type: "varchar2", length: 20, nullable: true })
  coState?: string; // CO_STATE VARCHAR2(20)

  @Column({ type: "char", length: 6, nullable: true })
  coPin?: string; // CO_PIN CHAR(6)

  @Column({ type: "varchar2", length: 25, nullable: true })
  coPhone?: string; // CO_PHONE VARCHAR2(25)

  @Column({ type: "varchar2", length: 25, nullable: true })
  coFax?: string; // CO_FAX VARCHAR2(25)

  @Column({ type: "varchar2", length: 40, nullable: true })
  coEmail?: string; // CO_EMAIL VARCHAR2(40)

  @Column({ type: "varchar2", length: 40, nullable: true })
  urlName?: string; // URL_NAME VARCHAR2(40)

  @Column({ type: "raw", length: 16 })
  rrowid?: Buffer; // RROWID RAW(16)

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

  @Column({ type: "varchar2", length: 30, nullable: true })
  rcNo?: string; // RC_NO VARCHAR2(30)

  @Column({ type: "varchar2", length: 10, nullable: true })
  areacode?: string; // AREACODE VARCHAR2(10)

  @Column({ type: "varchar2", length: 25, nullable: true })
  lstNo?: string; // LST_NO VARCHAR2(25)

  @Column({ type: "varchar2", length: 25, nullable: true })
  cstNo?: string; // CST_NO VARCHAR2(25)

  @Column({ type: "char", length: 1, nullable: true })
  taxBill?: string; // TAX_BILL CHAR(1)

  @Column({ type: "char", length: 1, nullable: true })
  glaccBill?: string; // GLACC_BILL CHAR(1)

  @Column({ type: "number", precision: 8, scale: 3, nullable: true })
  stdCarrot?: number; // STD_CARROT NUMBER(8,3)

  @Column({ type: "char", length: 4, nullable: true })
  code?: string; // CODE CHAR(4)

  @Column({ type: "varchar2", length: 15, nullable: true })
  tin?: string; // TIN VARCHAR2(15)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  tferfk?: number; // TFERFK NUMBER(10)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  cferfk?: number; // CFERFK NUMBER(10)

  @Column({ type: "number", precision: 10, scale: 0, nullable: true })
  downfk?: number; // DOWNFK NUMBER(10)

  @Column({ type: "char", length: 1, nullable: true })
  prodErp?: string; // PROD_ERP CHAR(1)

  @Column({ type: "number", precision: 12, scale: 0, nullable: true })
  mobileNo?: number; // MOBILE_NO NUMBER(12)
}
