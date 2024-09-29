import { Column, Entity } from "typeorm";

@Entity("WEIGHT_STOCK")
export class WeightStock {
  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("number", { name: "FWT", nullable: true, precision: 8, scale: 3 })
  fwt: number | null;

  @Column("number", { name: "TWT", nullable: true, precision: 8, scale: 3 })
  twt: number | null;

  @Column("varchar2", { name: "CAPTION", nullable: true, length: 10 })
  caption: string | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 30 })
  name: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;
}
