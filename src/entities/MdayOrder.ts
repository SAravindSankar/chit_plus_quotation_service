import { Column, Entity } from "typeorm";

@Entity("MDAY_ORDER")
export class MdayOrder {
  @Column("number", {
    name: "SAL_ORDERPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salOrderpk: number | null;

  @Column("varchar2", { name: "TYPE", nullable: true, length: 20 })
  type: string | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 6, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("date", { name: "REM_DATE", nullable: true })
  remDate: Date | null;

  @Column("date", { name: "DUE_DATE", nullable: true })
  dueDate: Date | null;

  @Column("date", { name: "VALID_DATE", nullable: true })
  validDate: Date | null;

  @Column("char", { name: "ORDER_ST", nullable: true, length: 1 })
  orderSt: string | null;

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

  @Column("date", { name: "ORDER_DATE", nullable: true })
  orderDate: Date | null;

  @Column("number", {
    name: "SALES_MAN",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  salesMan: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", {
    name: "ORDER_NO",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  orderNo: number | null;

  @Column("char", { name: "OPEN", nullable: true, length: 1 })
  open: string | null;

  @Column("char", { name: "FOR_ORDER", nullable: true, length: 1 })
  forOrder: string | null;

  @Column("char", { name: "DAY_SESSION", nullable: true, length: 1 })
  daySession: string | null;
}
