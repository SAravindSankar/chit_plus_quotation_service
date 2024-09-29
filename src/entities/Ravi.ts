import { Column, Entity, Index } from "typeorm";

@Index("REGNO", ["regno"], { unique: true })
@Entity("RAVI")
export class Ravi {
  @Column("number", { name: "SLNO", nullable: true, precision: 2, scale: 0 })
  slno: number | null;

  @Column("number", { primary: true, name: "REGNO", precision: 20, scale: 0 })
  regno: number;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("varchar2", { name: "PLACE", nullable: true, length: 20 })
  place: string | null;
}
