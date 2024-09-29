import { Column, Entity, Index } from "typeorm";

@Index("MVIEW$_ADV_FILTER_PK", ["filterid", "subfilternum"], { unique: true })
@Entity("MVIEW$_ADV_FILTER")
export class MviewAdvFilter {
  @Column("date", { name: "DATE_VALUE2", nullable: true })
  dateValue2: Date | null;

  @Column("date", { name: "DATE_VALUE1", nullable: true })
  dateValue1: Date | null;

  @Column("number", { name: "NUM_VALUE2", nullable: true })
  numValue2: number | null;

  @Column("number", { name: "NUM_VALUE1", nullable: true })
  numValue1: number | null;

  @Column("varchar2", { name: "STR_VALUE", nullable: true, length: 1028 })
  strValue: string | null;

  @Column("number", { name: "SUBFILTERTYPE" })
  subfiltertype: number;

  @Column("number", { primary: true, name: "SUBFILTERNUM#" })
  subfilternum: number;

  @Column("number", { primary: true, name: "FILTERID#" })
  filterid: number;
}
