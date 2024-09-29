import { Column, Entity } from "typeorm";

@Entity("MDAY_REPAIR")
export class MdayRepair {
  @Column("number", {
    name: "REPAIRPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairpk: number | null;

  @Column("number", {
    name: "REPAIR_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  repairNo: number | null;

  @Column("date", { name: "REPAIR_DATE", nullable: true })
  repairDate: Date | null;

  @Column("number", {
    name: "SALES_MAN",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salesMan: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 6, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 4, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("char", { name: "REPAIR_ST", nullable: true, length: 1 })
  repairSt: string | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("char", { name: "FOR_REP", nullable: true, length: 1 })
  forRep: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;
}
