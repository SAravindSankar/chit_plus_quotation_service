import { Column, Entity } from "typeorm";

@Entity("JSAL_QUO_PART_TEMP")
export class JsalQuoPartTemp {
  @Column("number", {
    name: "QUO_PARTPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  quoPartpk: number | null;

  @Column("number", {
    name: "QUO_DET1FK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  quoDet1Fk: number | null;

  @Column("number", { name: "BAL_WT", nullable: true, precision: 8, scale: 3 })
  balWt: number | null;
}
