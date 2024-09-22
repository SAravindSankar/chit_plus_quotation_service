import { Column, Entity } from "typeorm";

@Entity("ADDR_DUP")
export class AddrDup {
  @Column("varchar2", { name: "ID_NUMBER", nullable: true, length: 13 })
  idNumber: string | null;

  @Column("varchar2", { name: "CUST_NAME", nullable: true, length: 40 })
  custName: string | null;

  @Column("varchar2", { name: "CUST_SEX", nullable: true, length: 1 })
  custSex: string | null;

  @Column("varchar2", { name: "ADD_1", nullable: true, length: 100 })
  add_1: string | null;

  @Column("varchar2", { name: "ADD_2", nullable: true, length: 30 })
  add_2: string | null;

  @Column("varchar2", { name: "ADD_3", nullable: true, length: 30 })
  add_3: string | null;

  @Column("varchar2", { name: "GIFTCODE", nullable: true, length: 6 })
  giftcode: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 40 })
  name: string | null;

  @Column("char", { name: "COMPLETED", nullable: true, length: 1 })
  completed: string | null;

  @Column("number", { name: "ADDRPK", nullable: true, precision: 6, scale: 0 })
  addrpk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
