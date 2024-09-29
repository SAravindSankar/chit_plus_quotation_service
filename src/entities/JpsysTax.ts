import { Column, Entity } from "typeorm";

@Entity("JPSYS_TAX")
export class JpsysTax {
  @Column("char", { name: "CODE", nullable: true, length: 2 })
  code: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 25 })
  name: string | null;

  @Column("number", { name: "TAX_PER", nullable: true, precision: 6, scale: 2 })
  taxPer: number | null;

  @Column("char", { name: "TAX_TYPE", nullable: true, length: 1 })
  taxType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
