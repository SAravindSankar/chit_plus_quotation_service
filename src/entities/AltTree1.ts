import { Column, Entity, Index, OneToMany } from "typeorm";
import { JmasProdSpec } from "./JmasProdSpec";
import { JmasPurWt } from "./JmasPurWt";

@Index(
  "ALPHATAGTREE",
  ["prodIda", "alttagpk", "prodfk", "companyfk", "delflag"],
  {}
)
@Index("ALTIND1", ["grpName", "tree1Pk", "delflag"], {})
@Index("ALTT1", ["tree1Pk", "delflag", "companyfk", "prodfk"], {})
@Index("ALTTRIN", ["companyfk", "delflag", "prodfk"], {})
@Index("ALTTRIN1", ["htree1Fk"], {})
@Index("ALTTRIN2", ["alttagpk", "delflag", "companyfk"], {})
@Index("ALT_TREE1$DELFLAG", ["tree1Pk", "htree1Fk", "delflag", "companyfk"], {})
@Index("GSDPSTKLATREE", ["delflag", "htree1Fk", "prodfk"], {})
@Index("HTREE1FK$TREE1PK", ["htree1Fk", "tree1Pk"], {})
@Index("HTREEIN", ["htree1Fk", "prodfk"], {})
@Index("INDX_TREE1", ["prodfk", "htree1Fk", "delflag"], {})
@Index("STOCK21", ["tree1Pk", "grpName", "htree1Fk"], {})
@Index("STOCK22", ["grpName", "prodfk", "companyfk"], {})
@Index("STOCK29", ["tree1Pk", "prodfk", "htree1Fk"], {})
@Index("TALTTREE", ["prodfk", "tree1Pk", "htree1Fk"], {})
@Index("TREE1", ["tree1Pk", "grpName", "htree1Fk", "companyfk", "delflag"], {})
@Index("TREE1PK$HTREE1FK", ["tree1Pk", "htree1Fk"], {})
@Index("TREE1PK$PRODFK", ["tree1Pk", "prodfk"], {})
@Index("TREE2", ["htree1Fk", "tree1Pk", "prodfk"], {})
@Index("TREE3", ["tree1Pk", "prodfk", "grpName"], {})
@Entity("ALT_TREE1")
export class AltTree1 {
  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @Column("number", {
    name: "REFTREE1PK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  reftree1Pk: number | null;

  @Column("char", { name: "DATA_VISIBLE", nullable: true, length: 1 })
  dataVisible: string | null;

  @Column("number", {
    name: "REFALTTAGPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  refalttagpk: number | null;

  @Column("number", {
    name: "REFPRODFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  refprodfk: number | null;

  @Column("char", { name: "PRODIDA", nullable: true, length: 4 })
  prodida: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { primary: true, name: "TREE1PK", precision: 6, scale: 0 })
  tree1Pk: number;

  @Column("varchar2", { name: "GRP_NAME", nullable: true, length: 30 })
  grpName: string | null;

  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 15 })
  shortName: string | null;

  @Column("number", {
    primary: true,
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

  @Column("varchar2", {
    primary: true,
    name: "DELFLAG",
    nullable: true,
    length: 20,
  })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", {
    primary: true,
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

  @OneToMany(() => JmasProdSpec, (jmasProdSpec) => jmasProdSpec.tree1Fk)
  jmasProdSpecs: JmasProdSpec[];

  @OneToMany(() => JmasPurWt, (jmasPurWt) => jmasPurWt.tree1Fk)
  jmasPurWts: JmasPurWt[];
}
