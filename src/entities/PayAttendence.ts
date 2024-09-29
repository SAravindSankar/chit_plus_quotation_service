import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasCompany } from "./MasCompany";
import { MasEmp } from "./MasEmp";

@Index("PAY_ATTPK", ["payAttpk"], { unique: true })
@Entity("PAY_ATTENDENCE")
export class PayAttendence {
  @Column("number", {
    primary: true,
    name: "PAY_ATTPK",
    precision: 8,
    scale: 0,
  })
  payAttpk: number;

  @Column("char", { name: "MONTHYEAR", length: 8 })
  monthyear: string;

  @Column("number", { name: "DAYS_WKG", precision: 4, scale: 1 })
  daysWkg: number;

  @Column("number", {
    name: "DAYS_WKD",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysWkd: number | null;

  @Column("number", {
    name: "DAYS_LEAVE",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  daysLeave: number | null;

  @Column("number", {
    name: "DAYS_LOP",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  daysLop: number | null;

  @Column("number", {
    name: "DAYS_NIGHT",
    nullable: true,
    precision: 4,
    scale: 2,
  })
  daysNight: number | null;

  @Column("number", { name: "HRS_OT", nullable: true, precision: 4, scale: 1 })
  hrsOt: number | null;

  @Column("number", { name: "MTS_OT", nullable: true, precision: 4, scale: 2 })
  mtsOt: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "DAYS_EXTRA_WKD",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysExtraWkd: number | null;

  @Column("number", {
    name: "DAYS_EXTRA",
    nullable: true,
    precision: 4,
    scale: 1,
  })
  daysExtra: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasCompany, (masCompany) => masCompany.payAttendences)
  @JoinColumn([{ name: "COMPANYFK", referencedColumnName: "companypk" }])
  companyfk: MasCompany;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.payAttendences)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk: MasEmp;
}
