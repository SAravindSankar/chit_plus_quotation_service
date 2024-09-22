import { Column, Entity } from "typeorm";

@Entity("WK_DLRTRAN")
export class WkDlrtran {
  @Column("number", {
    name: "TRAN_STOCKFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranStockfk: number | null;

  @Column("number", {
    name: "VENDORFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  vendorfk: number | null;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 8, scale: 0 })
  tranNo: number | null;

  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 6, scale: 0 })
  prodfk: number | null;

  @Column("number", { name: "OP_WT", nullable: true, precision: 12, scale: 3 })
  opWt: number | null;

  @Column("number", { name: "OP_AMT", nullable: true, precision: 12, scale: 2 })
  opAmt: number | null;

  @Column("number", { name: "REC_WT", nullable: true, precision: 12, scale: 3 })
  recWt: number | null;

  @Column("number", { name: "ISS_WT", nullable: true, precision: 12, scale: 3 })
  issWt: number | null;

  @Column("number", { name: "DR_AMT", nullable: true, precision: 12, scale: 2 })
  drAmt: number | null;

  @Column("number", { name: "CR_AMT", nullable: true, precision: 12, scale: 2 })
  crAmt: number | null;

  @Column("varchar2", { name: "REMARKS", nullable: true, length: 200 })
  remarks: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "GWT", nullable: true, precision: 12, scale: 3 })
  gwt: number | null;

  @Column("number", { name: "NWT", nullable: true, precision: 12, scale: 3 })
  nwt: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", { name: "PURITY", nullable: true, precision: 5, scale: 2 })
  purity: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
