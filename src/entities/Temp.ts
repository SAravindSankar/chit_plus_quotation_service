import { Column, Entity } from "typeorm";

@Entity("TEMP")
export class Temp {
  @Column("varchar2", { name: "NAME", nullable: true, length: 40 })
  name: string | null;
}
