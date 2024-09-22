import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007590", ["jinvBtnpk"], { unique: true })
@Entity("JINV_BT")
export class JinvBt {
  @Column("number", {
    primary: true,
    name: "JINV_BTNPK",
    precision: 10,
    scale: 0,
  })
  jinvBtnpk: number;

  @Column("number", {
    name: "JINV_BTN_NO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  jinvBtnNo: number | null;

  @Column("date", { name: "JINV_BTN_DATE", nullable: true })
  jinvBtnDate: Date | null;

  @Column("varchar2", { name: "BTN_IN_OUT", nullable: true, length: 1 })
  btnInOut: string | null;

  @Column("varchar2", { name: "BTN_ST", nullable: true, length: 1 })
  btnSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 100 })
  remarks: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 51 })
  rrowid: Buffer | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", {
    name: "FOR_BRANCHFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  forBranchfk: number | null;

  @Column("number", {
    name: "REF_BTNPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refBtnpk: number | null;

  @Column("date", { name: "REF_BTN_DATE", nullable: true })
  refBtnDate: Date | null;

  @Column("char", { name: "BT_REF", nullable: true, length: 1 })
  btRef: string | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 6, scale: 0 })
  docfk: number | null;

  @Column("number", {
    name: "REF_BTN_NO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  refBtnNo: number | null;
}
