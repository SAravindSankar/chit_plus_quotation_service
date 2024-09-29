import { Column, Entity } from "typeorm";

@Entity("BS_REIS1")
export class BsReis1 {
  @Column("varchar2", { name: "ISSREC", nullable: true, length: 1 })
  issrec: string | null;

  @Column("date", { name: "TRANDATE", nullable: true })
  trandate: Date | null;

  @Column("varchar2", { name: "TRANNO", nullable: true, length: 4 })
  tranno: string | null;

  @Column("varchar2", { name: "CATCODE", nullable: true, length: 2 })
  catcode: string | null;

  @Column("varchar2", { name: "PRO_CODE", nullable: true, length: 4 })
  proCode: string | null;

  @Column("varchar2", { name: "DCODE", nullable: true, length: 4 })
  dcode: string | null;

  @Column("varchar2", { name: "PARTY", nullable: true, length: 5 })
  party: string | null;

  @Column("varchar2", { name: "BILLNO", nullable: true, length: 4 })
  billno: string | null;

  @Column("date", { name: "BILLDATE", nullable: true })
  billdate: Date | null;

  @Column("varchar2", { name: "PIECES", nullable: true, length: 4 })
  pieces: string | null;

  @Column("varchar2", { name: "WEIGHT", nullable: true, length: 4 })
  weight: string | null;

  @Column("varchar2", { name: "NETWT", nullable: true, length: 4 })
  netwt: string | null;

  @Column("varchar2", { name: "TOTWT", nullable: true, length: 4 })
  totwt: string | null;

  @Column("varchar2", { name: "PUREWT", nullable: true, length: 4 })
  purewt: string | null;

  @Column("varchar2", { name: "AMOUNT", nullable: true, length: 4 })
  amount: string | null;
}
