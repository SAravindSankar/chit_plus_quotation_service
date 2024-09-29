import { Column, Entity, Index, OneToMany } from "typeorm";
import { CardCtrlsettingsDet1 } from "./CardCtrlsettingsDet1";

@Index("CTRLPK", ["ctrlpk"], { unique: true })
@Entity("CARD_CTRLSETTINGS")
export class CardCtrlsettings {
  @Column("number", { primary: true, name: "CTRLPK", precision: 8, scale: 0 })
  ctrlpk: number;

  @Column("char", { name: "CTRL_CODE", length: 4 })
  ctrlCode: string;

  @Column("varchar2", { name: "NAME", nullable: true, length: 20 })
  name: string | null;

  @Column("char", { name: "VISIBLE", nullable: true, length: 1 })
  visible: string | null;

  @Column("varchar2", { name: "TAG", nullable: true, length: 20 })
  tag: string | null;

  @Column("varchar2", { name: "CAPTION", nullable: true, length: 20 })
  caption: string | null;

  @Column("varchar2", { name: "FONT_NAME", nullable: true, length: 20 })
  fontName: string | null;

  @Column("number", {
    name: "FONT_SIZE",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  fontSize: number | null;

  @Column("char", { name: "FONT_BOLD", nullable: true, length: 1 })
  fontBold: string | null;

  @Column("char", { name: "FONT_ITALIC", nullable: true, length: 1 })
  fontItalic: string | null;

  @Column("number", { name: "COLOR", nullable: true, precision: 12, scale: 0 })
  color: number | null;

  @Column("number", { name: "TOP", nullable: true, precision: 10, scale: 0 })
  top: number | null;

  @Column("number", { name: "LEFT", nullable: true, precision: 10, scale: 0 })
  left: number | null;

  @Column("number", { name: "HEIGHT", nullable: true, precision: 10, scale: 0 })
  height: number | null;

  @Column("number", { name: "WIDTH", nullable: true, precision: 10, scale: 0 })
  width: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 40 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 8, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 8, scale: 0 })
  mbyfk: number | null;

  @OneToMany(
    () => CardCtrlsettingsDet1,
    (cardCtrlsettingsDet1) => cardCtrlsettingsDet1.ctrlfk
  )
  cardCtrlsettingsDets: CardCtrlsettingsDet1[];
}
