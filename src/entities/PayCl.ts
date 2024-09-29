import { Column, Entity } from "typeorm";

@Entity("PAY_CL")
export class PayCl {
  @Column("number", { name: "EMPCLPK", nullable: true, precision: 8, scale: 0 })
  empclpk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("number", {
    name: "SAL_PERIODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  salPeriodfk: number | null;

  @Column("number", { name: "NOOFCL", nullable: true, precision: 4, scale: 2 })
  noofcl: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
