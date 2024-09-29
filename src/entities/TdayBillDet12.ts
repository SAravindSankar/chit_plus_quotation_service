import { Column, Entity } from "typeorm";

@Entity("TDAY_BILL_DET12")
export class TdayBillDet12 {
  @Column("number", { name: "BILL_DET12PK", precision: 8, scale: 0 })
  billDet12Pk: number;

  @Column("number", { name: "BILL_DET1FK", precision: 8, scale: 0 })
  billDet1Fk: number;

  @Column("char", { name: "LOT", nullable: true, length: 2 })
  lot: string | null;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("varchar2", { name: "DESCRIPTION", nullable: true, length: 20 })
  description: string | null;

  @Column("number", { name: "PER", nullable: true, precision: 6, scale: 2 })
  per: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "SCH_TYPE", nullable: true, length: 1 })
  schType: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
