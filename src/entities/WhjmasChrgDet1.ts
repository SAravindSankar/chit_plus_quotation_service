import { Column, Entity, Index } from "typeorm";

@Index("WHCHRG_DET1PK", ["whchrgDet1Pk"], { unique: true })
@Entity("WHJMAS_CHRG_DET1")
export class WhjmasChrgDet1 {
  @Column("number", {
    primary: true,
    name: "WHCHRG_DET1PK",
    precision: 8,
    scale: 0,
  })
  whchrgDet1Pk: number;

  @Column("number", {
    name: "WHCHRG_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  whchrgDetfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TOL_PER", nullable: true, precision: 4, scale: 2 })
  tolPer: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
