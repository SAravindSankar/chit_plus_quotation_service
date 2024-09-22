import { Column, Entity } from "typeorm";

@Entity("ALT_TREE1OLD")
export class AltTree1Old {
  @Column("number", { name: "TREE1PK", nullable: true, precision: 6, scale: 0 })
  tree1Pk: number | null;

  @Column("varchar2", { name: "GRP_NAME", nullable: true, length: 30 })
  grpName: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 15 })
  shortName: string | null;

  @Column("number", {
    name: "HTREE1FK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  htree1Fk: number | null;

  @Column("number", {
    name: "LEVEL_NO",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  levelNo: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    name: "COMPANYFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  companyfk: number | null;

  @Column("number", { name: "PRODHFK", nullable: true, precision: 4, scale: 0 })
  prodhfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "LAST_TAGNO",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  lastTagno: number | null;

  @Column("number", {
    name: "ALTTAGPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  alttagpk: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

  @Column("char", { name: "PRODID", nullable: true, length: 1 })
  prodid: string | null;

  @Column("char", { name: "PROD_IDA", nullable: true, length: 4 })
  prodIda: string | null;

  @Column("char", { name: "LAST_TAGNOA", nullable: true, length: 4 })
  lastTagnoa: string | null;

  @Column("char", { name: "PRODIDA", nullable: true, length: 4 })
  prodida: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
