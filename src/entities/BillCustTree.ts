import { Column, Entity } from "typeorm";

@Entity("BILL_CUST_TREE")
export class BillCustTree {
  @Column("number", { name: "CUSTFK", nullable: true, precision: 8, scale: 0 })
  custfk: number | null;

  @Column("number", { name: "TCUSTFK", nullable: true, precision: 8, scale: 0 })
  tcustfk: number | null;

  @Column("number", { name: "HCUSTFK", nullable: true, precision: 8, scale: 0 })
  hcustfk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("number", { name: "BILL_NO", nullable: true, precision: 8, scale: 0 })
  billNo: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 12, scale: 2 })
  amount: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    name: "SAL_BILLFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salBillfk: number | null;

  @Column("number", {
    name: "GUARANTORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  guarantorfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
