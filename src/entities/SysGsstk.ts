import { Column, Entity } from "typeorm";

@Entity("SYS_GSSTK")
export class SysGsstk {
  @Column("varchar2", { name: "GSDESC", nullable: true, length: 40 })
  gsdesc: string | null;

  @Column("char", { name: "GSDP", nullable: true, length: 1 })
  gsdp: string | null;

  @Column("char", { name: "TAX_CODE", nullable: true, length: 2 })
  taxCode: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
