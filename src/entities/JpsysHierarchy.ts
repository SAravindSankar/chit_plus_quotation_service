import { Column, Entity } from "typeorm";

@Entity("JPSYS_HIERARCHY")
export class JpsysHierarchy {
  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 1,
    scale: 0,
  })
  levelNo: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 15 })
  description: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
