import { Column, Entity } from "typeorm";

@Entity("EXPTABLES")
export class Exptables {
  @Column("varchar2", { name: "TNAME", nullable: true, length: 30 })
  tname: string | null;

  @Column("number", { name: "TABORD", nullable: true, precision: 3, scale: 0 })
  tabord: number | null;

  @Column("varchar2", { name: "TABSECTION", nullable: true, length: 15 })
  tabsection: string | null;

  @Column("char", { name: "SECORD", nullable: true, length: 1 })
  secord: string | null;

  @Column("varchar2", { name: "SEQUENCE", nullable: true, length: 25 })
  sequence: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
