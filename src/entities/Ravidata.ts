import { Column, Entity } from "typeorm";

@Entity("RAVIDATA")
export class Ravidata {
  @Column("number", { name: "SLNO", nullable: true, precision: 2, scale: 0 })
  slno: number | null;

  @Column("number", { name: "REGNO", nullable: true, precision: 20, scale: 0 })
  regno: number | null;

  @Column("number", { name: "TAMIL", nullable: true, precision: 15, scale: 0 })
  tamil: number | null;

  @Column("number", {
    name: "ENGLISH",
    nullable: true,
    precision: 15,
    scale: 0,
  })
  english: number | null;
}
