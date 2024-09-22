import { Column, Entity } from "typeorm";

@Entity("SYSGROUP")
export class Sysgroup {
  @Column("number", {
    name: "SYSTARGROUPPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  systargrouppk: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("char", { name: "GRP_TYPE", nullable: true, length: 1 })
  grpType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
