import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEventschDet1 } from "./MasEventschDet1";
import { MasUom } from "./MasUom";

@Index("EVENTSCH_DET11PK", ["eventschDet11Pk"], { unique: true })
@Entity("MAS_EVENTSCH_DET11")
export class MasEventschDet11 {
  @Column("number", {
    primary: true,
    name: "EVENTSCH_DET11PK",
    precision: 8,
    scale: 0,
  })
  eventschDet11Pk: number;

  @Column("char", { name: "LOT", nullable: true, length: 1 })
  lot: string | null;

  @Column("char", { name: "SCHEME_TYPE", nullable: true, length: 1 })
  schemeType: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "QTY", nullable: true, precision: 7, scale: 3 })
  qty: number | null;

  @Column("number", { name: "RATE", precision: 7, scale: 2 })
  rate: number;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(
    () => MasEventschDet1,
    (masEventschDet1) => masEventschDet1.masEventschDets
  )
  @JoinColumn([
    { name: "EVENTSCH_DET1FK", referencedColumnName: "eventschDet1Pk" },
  ])
  eventschDet1Fk: MasEventschDet1;

  @ManyToOne(() => MasUom, (masUom) => masUom.masEventschDets)
  @JoinColumn([{ name: "UOMFK", referencedColumnName: "uompk" }])
  uomfk: MasUom;
}
