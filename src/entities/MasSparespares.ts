import { Column, Entity, Index } from "typeorm";

@Index("SPARESFK", ["delflag", "prodfk", "sparesfk"], { unique: true })
@Index("SPARESPAREPK", ["sparesparepk"], { unique: true })
@Entity("MAS_SPARESPARES")
export class MasSparespares {
  @Column("number", { name: "SPARESPAREPK", precision: 6, scale: 0 })
  sparesparepk: number;

  @Column("number", { primary: true, name: "SPARESFK", precision: 6, scale: 0 })
  sparesfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { primary: true, name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("char", { name: "PROD_SPARES", nullable: true, length: 1 })
  prodSpares: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
