import { Column, Entity } from "typeorm";

@Entity("WK_CRBL")
export class WkCrbl {
  @Column("number", {
    name: "VENDORPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorpk: number | null;

  @Column("number", { name: "CL_BAL", nullable: true, precision: 13, scale: 2 })
  clBal: number | null;

  @Column("char", { name: "TYPE", nullable: true, length: 1 })
  type: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
