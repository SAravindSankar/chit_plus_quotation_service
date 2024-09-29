import { Column, Entity } from "typeorm";

@Entity("SUBPROD")
export class Subprod {
  @Column("number", {
    name: "PRO_CODE",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  proCode: number | null;

  @Column("varchar2", { name: "DESCRIP", nullable: true, length: 30 })
  descrip: string | null;

  @Column("number", { name: "DCODE", nullable: true, precision: 5, scale: 0 })
  dcode: number | null;

  @Column("varchar2", { name: "SHORTNAME", nullable: true, length: 10 })
  shortname: string | null;

  @Column("char", { name: "TAX", nullable: true, length: 1 })
  tax: string | null;

  @Column("number", {
    name: "SALESTAX",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  salestax: number | null;

  @Column("char", { name: "PAIR", nullable: true, length: 1 })
  pair: string | null;

  @Column("char", { name: "ACTIVE", nullable: true, length: 1 })
  active: string | null;

  @Column("number", { name: "COUNTER", nullable: true, precision: 3, scale: 0 })
  counter: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
