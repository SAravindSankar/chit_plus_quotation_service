import { Column, Entity } from "typeorm";

@Entity("WAGE_ATTENDENCE")
export class WageAttendence {
  @Column("number", { name: "PAY_ATTPK", precision: 8, scale: 0 })
  payAttpk: number;

  @Column("char", { name: "MONTHYEAR", length: 8 })
  monthyear: string;

  @Column("number", { name: "EMPFK", precision: 6, scale: 0 })
  empfk: number;

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
    precision: 3,
    scale: 2,
  })
  daysLeave: number | null;

  @Column("number", {
    name: "DAYS_LOP",
    nullable: true,
    precision: 3,
    scale: 2,
  })
  daysLop: number | null;

  @Column("number", {
    name: "DAYS_NIGHT",
    nullable: true,
    precision: 2,
    scale: 0,
  })
  daysNight: number | null;

  @Column("number", { name: "HRS_OT", nullable: true, precision: 3, scale: 2 })
  hrsOt: number | null;

  @Column("number", { name: "MTS_OT", nullable: true, precision: 2, scale: 0 })
  mtsOt: number | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
