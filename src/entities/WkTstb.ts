import { Column, Entity } from "typeorm";

@Entity("WK_TSTB")
export class WkTstb {
  @Column("date", { name: "TRAN_DATE", nullable: true })
  tranDate: Date | null;

  @Column("number", { name: "TRAN_NO", nullable: true, precision: 8, scale: 0 })
  tranNo: number | null;

  @Column("varchar2", { name: "DOC_NAME", nullable: true, length: 40 })
  docName: string | null;

  @Column("varchar2", { name: "ACC_NAME", nullable: true, length: 40 })
  accName: string | null;

  @Column("char", { name: "DC_IND", nullable: true, length: 1 })
  dcInd: string | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 14, scale: 2 })
  amount: number | null;

  //DB_ERROR -> PK
  @Column("raw", { name: "RROWID", nullable: true, length: 16, primary: true })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
