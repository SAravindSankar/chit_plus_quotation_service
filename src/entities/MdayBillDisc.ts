import { Column, Entity } from "typeorm";

@Entity("MDAY_BILL_DISC")
export class MdayBillDisc {
  @Column("number", {
    name: "BILL_DISCPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  billDiscpk: number | null;

  @Column("number", {
    name: "JSAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  jsalBillfk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", {
    name: "ACTUAL_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  actualPer: number | null;

  @Column("number", {
    name: "ACTUAL_WT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  actualWt: number | null;

  @Column("number", {
    name: "ACTUAL_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  actualRate: number | null;

  @Column("number", {
    name: "ACTUAL_AMT",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  actualAmt: number | null;

  @Column("number", { name: "MOD_PER", nullable: true, precision: 6, scale: 2 })
  modPer: number | null;

  @Column("number", { name: "MOD_WT", nullable: true, precision: 8, scale: 3 })
  modWt: number | null;

  @Column("number", { name: "MOD_AMT", nullable: true, precision: 8, scale: 2 })
  modAmt: number | null;

  @Column("number", { name: "ADJ_AMT", nullable: true, precision: 8, scale: 2 })
  adjAmt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "MOD_RATE",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  modRate: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;
}
