import { Column, Entity } from "typeorm";

@Entity("DELPK")
export class Delpk {
  @Column("number", { name: "ADDRPK", nullable: true, precision: 6, scale: 0 })
  addrpk: number | null;
}
