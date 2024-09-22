import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasDept } from "./MasDept";
import { MasPtStaff } from "./MasPtStaff";

@Index("PTS_WDETPK", ["ptsWdetpk"], { unique: true })
@Entity("PAY_PTS_WDET")
export class PayPtsWdet {
  @Column("number", {
    primary: true,
    name: "PTS_WDETPK",
    precision: 8,
    scale: 0,
  })
  ptsWdetpk: number;

  @Column("date", { name: "FROM_DATE", nullable: true })
  fromDate: Date | null;

  @Column("date", { name: "TO_DATE", nullable: true })
  toDate: Date | null;

  @Column("number", { name: "NODAYS", nullable: true, precision: 3, scale: 0 })
  nodays: number | null;

  @Column("number", { name: "AEMPFK", nullable: true, precision: 6, scale: 0 })
  aempfk: number | null;

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

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "REF_NO", nullable: true, precision: 5, scale: 0 })
  refNo: number | null;

  @Column("date", { name: "REF_DATE", nullable: true })
  refDate: Date | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasDept, (masDept) => masDept.payPtsWdets)
  @JoinColumn([{ name: "DEPTFK", referencedColumnName: "deptpk" }])
  deptfk: MasDept;

  @ManyToOne(() => MasPtStaff, (masPtStaff) => masPtStaff.payPtsWdets)
  @JoinColumn([{ name: "PT_STAFFFK", referencedColumnName: "ptStaffpk" }])
  ptStafffk: MasPtStaff;
}
