import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { CardCtrlsettings } from "./CardCtrlsettings";

@Index("CTRL_DET1PK", ["ctrlDet1Pk"], { unique: true })
@Entity("CARD_CTRLSETTINGS_DET1")
export class CardCtrlsettingsDet1 {
  @Column("number", {
    primary: true,
    name: "CTRL_DET1PK",
    precision: 8,
    scale: 0,
  })
  ctrlDet1Pk: number;

  @Column("blob", { name: "PROD_IMG", nullable: true })
  prodImg: Buffer | null;

  @Column("varchar2", { name: "FILE_EXT", nullable: true, length: 4 })
  fileExt: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @ManyToOne(
    () => CardCtrlsettings,
    (cardCtrlsettings) => cardCtrlsettings.cardCtrlsettingsDets
  )
  @JoinColumn([{ name: "CTRLFK", referencedColumnName: "ctrlpk" }])
  ctrlfk: CardCtrlsettings;
}
