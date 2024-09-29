import { Column, Entity } from "typeorm";

@Entity("JPSYS_UOM")
export class JpsysUom {
  @Column("varchar2", { name: "SHORT_DESC", nullable: true, length: 5 })
  shortDesc: string | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
