import { Column, Entity } from "typeorm";

@Entity("JINV_STOCKCHK")
export class JinvStockchk {
  @Column("number", { name: "TAGFK", nullable: true, precision: 8, scale: 0 })
  tagfk: number | null;

  @Column("char", { name: "SCANNED", nullable: true, length: 1 })
  scanned: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 4, scale: 0 })
  rackfk: number | null;

  @Column("varchar2", { name: "PNAME", nullable: true, length: 30 })
  pname: string | null;

  @Column("varchar2", { name: "PTAGNO", nullable: true, length: 10 })
  ptagno: string | null;

  @Column("number", { name: "PCS", nullable: true, precision: 4, scale: 2 })
  pcs: number | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("char", { name: "OLD_CODE", nullable: true, length: 4 })
  oldCode: string | null;

  @Column("number", { name: "TREEHFK", nullable: true, precision: 6, scale: 0 })
  treehfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("number", {
    name: "ALTTAGFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  alttagfk: number | null;

  @Column("number", { name: "GWT", nullable: true, precision: 8, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 8, scale: 3 })
  nwt: number | null;

  @Column("number", { name: "TRAY_NO", nullable: true, precision: 4, scale: 0 })
  trayNo: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
