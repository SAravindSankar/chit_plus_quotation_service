import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { JsalQuoDet1 } from "./JsalQuoDet1";

@Entity("JSAL_QUO_PART")
export class JsalQuoPart {
  //DB_ERROR -> PK
  @Column("number", {
    primary: true,
    name: "QUO_PARTPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  quoPartpk: number | null;

  @Column("number", { name: "BAL_WT", nullable: true, precision: 8, scale: 3 })
  balWt: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => JsalQuoDet1, (jsalQuoDet1) => jsalQuoDet1.jsalQuoParts)
  @JoinColumn([{ name: "QUO_DET1FK", referencedColumnName: "quoDet1Pk" }])
  quoDet1Fk: JsalQuoDet1;
}
