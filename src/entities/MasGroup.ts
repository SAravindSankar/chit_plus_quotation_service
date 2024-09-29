import { Column, Entity, Index } from "typeorm";

@Index("GROUPPK", ["grouppk"], { unique: true })
@Entity("MAS_GROUP")
export class MasGroup {
  @Column("varchar2", { name: "NAME", length: 40 })
  name: string;

  @Column("varchar2", { name: "BUSINESS_AREAS", length: 50 })
  businessAreas: string;

  @Column("number", { primary: true, name: "GROUPPK", precision: 2, scale: 0 })
  grouppk: number;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
