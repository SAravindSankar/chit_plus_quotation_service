import { Column, Entity } from "typeorm";

@Entity("WK_CON_QRY")
export class WkConQry {
  @Column("number", {
    name: "CON_QRYPK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  conQrypk: number | null;

  @Column("varchar2", { name: "TAB_NAME", nullable: true, length: 20 })
  tabName: string | null;

  @Column("varchar2", { name: "TAB_DESC", nullable: true, length: 30 })
  tabDesc: string | null;

  @Column("varchar2", { name: "FLD_NAME", nullable: true, length: 20 })
  fldName: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
