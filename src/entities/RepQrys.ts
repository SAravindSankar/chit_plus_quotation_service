import { Column, Entity } from "typeorm";

@Entity("REP_QRYS")
export class RepQrys {
  @Column("varchar2", { name: "SHORT_NAME", nullable: true, length: 50 })
  shortName: string | null;

  @Column("varchar2", { name: "QRY_TEXT", nullable: true, length: 2000 })
  qryText: string | null;

  @Column("varchar2", { name: "DESCRIP", nullable: true, length: 150 })
  descrip: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
