import { Column, Entity } from "typeorm";

@Entity("PMAST")
export class Pmast {
  @Column("char", { name: "PRO_CODE", nullable: true, length: 5 })
  proCode: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("varchar2", { name: "SHORTNAME", nullable: true, length: 10 })
  shortname: string | null;
}
