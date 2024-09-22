import { Column, Entity } from "typeorm";

@Entity("SQLPLUS_PRODUCT_PROFILE")
export class SqlplusProductProfile {
  @Column("date", { name: "DATE_VALUE", nullable: true })
  dateValue: Date | null;

  @Column("varchar2", { name: "CHAR_VALUE", nullable: true, length: 240 })
  charValue: string | null;

  @Column("number", {
    name: "NUMERIC_VALUE",
    nullable: true,
    precision: 15,
    scale: 2,
  })
  numericValue: number | null;

  @Column("varchar2", { name: "SCOPE", nullable: true, length: 240 })
  scope: string | null;

  @Column("varchar2", { name: "ATTRIBUTE", nullable: true, length: 240 })
  attribute: string | null;

  @Column("varchar2", { name: "USERID", nullable: true, length: 128 })
  userid: string | null;

  @Column("varchar2", { name: "PRODUCT", length: 30 })
  product: string;

  @Column("long", { name: "LONG_VALUE", nullable: true })
  longValue: string | null;
}
