import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007714", ["schDet2Pk"], { unique: true })
@Entity("JMAS_SCHEME_DET2")
export class JmasSchemeDet2 {
  @Column("number", {
    primary: true,
    name: "SCH_DET2PK",
    precision: 8,
    scale: 0,
  })
  schDet2Pk: number;

  @Column("number", { name: "SCH_FK", nullable: true, precision: 6, scale: 0 })
  schFk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "FROM_VALUE",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  fromValue: number | null;

  @Column("number", {
    name: "TO_VALUE",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  toValue: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "GIFT_VALUE",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  giftValue: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
