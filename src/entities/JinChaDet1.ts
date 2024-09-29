import { Column, Entity, Index } from "typeorm";

@Index("IN_CHA_DETPK", ["inChaDetpk"], { unique: true })
@Entity("JIN_CHA_DET1")
export class JinChaDet1 {
  @Column("number", {
    primary: true,
    name: "IN_CHA_DETPK",
    precision: 8,
    scale: 0,
  })
  inChaDetpk: number;

  @Column("number", {
    name: "IN_CHAFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  inChafk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "PCS", nullable: true, precision: 5, scale: 0 })
  pcs: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "SWT", nullable: true, precision: 8, scale: 3 })
  swt: number | null;

  @Column("number", { name: "LWT", nullable: true, precision: 8, scale: 3 })
  lwt: number | null;

  @Column("number", { name: "WWT", nullable: true, precision: 8, scale: 3 })
  wwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "RATE", nullable: true, precision: 8, scale: 2 })
  rate: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 10, scale: 2 })
  amount: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 8, scale: 3 })
  purity: number | null;

  @Column("number", {
    name: "STD_PURITY",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  stdPurity: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;
}
