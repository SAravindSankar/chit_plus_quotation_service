import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007451", ["payBillpk"], { unique: true })
@Entity("ACC_PAY_BILL")
export class AccPayBill {
  @Column("number", {
    primary: true,
    name: "PAY_BILLPK",
    precision: 8,
    scale: 0,
  })
  payBillpk: number;

  @Column("number", { name: "PAYFK", precision: 8, scale: 0 })
  payfk: number;

  @Column("char", { name: "SAL_SERVICE", length: 1 })
  salService: string;

  @Column("number", { name: "SALSER_BILLFK", precision: 6, scale: 0 })
  salserBillfk: number;

  @Column("number", { name: "AMOUNT", precision: 12, scale: 2 })
  amount: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
