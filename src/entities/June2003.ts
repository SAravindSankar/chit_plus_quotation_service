import { Column, Entity } from "typeorm";

@Entity("JUNE2003")
export class June2003 {
  @Column("number", {
    name: "AB12_MCHG",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  ab12Mchg: number | null;

  @Column("number", {
    name: "AB12_VALUE",
    nullable: true,
    precision: 18,
    scale: 0,
  })
  ab12Value: number | null;
}
