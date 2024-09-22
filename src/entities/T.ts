import { Column, Entity } from "typeorm";

@Entity("T")
export class T {
  @Column("number", { name: "NO", nullable: true, precision: 4, scale: 0 })
  no: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 10 })
  name: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
