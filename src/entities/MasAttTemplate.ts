import { Column, Entity } from "typeorm";

@Entity("MAS_ATT_TEMPLATE")
export class MasAttTemplate {
  @Column("number", {
    name: "ATT_TEMPPK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  attTemppk: number | null;

  @Column("varchar2", { name: "ATT_TEMP_NAME", nullable: true, length: 20 })
  attTempName: string | null;

  @Column("number", { name: "ATT1PK", nullable: true, precision: 10, scale: 0 })
  att1Pk: number | null;

  @Column("number", { name: "ATT2PK", nullable: true, precision: 10, scale: 0 })
  att2Pk: number | null;

  @Column("number", { name: "ATT3PK", nullable: true, precision: 10, scale: 0 })
  att3Pk: number | null;

  @Column("number", { name: "ATT4PK", nullable: true, precision: 10, scale: 0 })
  att4Pk: number | null;

  @Column("number", { name: "ATT5PK", nullable: true, precision: 10, scale: 0 })
  att5Pk: number | null;

  @Column("number", { name: "ATT6PK", nullable: true, precision: 10, scale: 0 })
  att6Pk: number | null;

  @Column("number", { name: "ATT7PK", nullable: true, precision: 10, scale: 0 })
  att7Pk: number | null;

  @Column("number", { name: "ATT8PK", nullable: true, precision: 10, scale: 0 })
  att8Pk: number | null;

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
}
