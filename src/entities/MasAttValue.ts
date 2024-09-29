import { Column, Entity } from "typeorm";

@Entity("MAS_ATT_VALUE")
export class MasAttValue {
  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "CBYFK", nullable: true, precision: 10, scale: 0 })
  cbyfk: number | null;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 10, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", {
    name: "ATT_VALUEPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  attValuepk: number | null;

  @Column("number", { name: "ATTFK", nullable: true, precision: 10, scale: 0 })
  attfk: number | null;

  @Column("varchar2", { name: "ATT_VALUE", nullable: true, length: 40 })
  attValue: string | null;

  @Column("varchar2", { name: "ATT_VALUE1", nullable: true, length: 10 })
  attValue1: string | null;
}
