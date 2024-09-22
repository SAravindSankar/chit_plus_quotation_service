import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasCompany } from "./MasCompany";
import { PayPtsWdet } from "./PayPtsWdet";

@Index("MAS_PT", ["staffNo"], { unique: true })
@Index("PT_STAFFPK", ["ptStaffpk"], { unique: true })
@Entity("MAS_PT_STAFF")
export class MasPtStaff {
  @Column("number", { name: "PT_STAFFPK", precision: 8, scale: 0 })
  ptStaffpk: number;

  @Column("number", { primary: true, name: "STAFF_NO", precision: 6, scale: 0 })
  staffNo: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("varchar2", { name: "ADDRESS", nullable: true, length: 100 })
  address: string | null;

  @Column("varchar2", { name: "CITY", nullable: true, length: 20 })
  city: string | null;

  @Column("varchar2", { name: "PHONE", nullable: true, length: 25 })
  phone: string | null;

  @Column("varchar2", { name: "E_MAIL", nullable: true, length: 25 })
  eMail: string | null;

  @Column("varchar2", { name: "WORK_AREA", nullable: true, length: 50 })
  workArea: string | null;

  @Column("number", { name: "DESIGFK", precision: 4, scale: 0 })
  desigfk: number;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", {
    name: "WKD_DAYS_YEAR",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  wkdDaysYear: number | null;

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

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("varchar2", { name: "PERIOD", nullable: true, length: 5 })
  period: string | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.masPtStaffs)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @OneToMany(() => PayPtsWdet, (payPtsWdet) => payPtsWdet.ptStafffk)
  payPtsWdets: PayPtsWdet[];
}
