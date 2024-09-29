import { Column, Entity } from "typeorm";

@Entity("BS_PURS1")
export class BsPurs1 {
  @Column("varchar2", { name: "TAXTYPE", nullable: true, length: 1 })
  taxtype: string | null;

  @Column("date", { name: "BILLDATE", nullable: true })
  billdate: Date | null;

  @Column("varchar2", { name: "BILLTYPE", nullable: true, length: 2 })
  billtype: string | null;

  @Column("varchar2", { name: "BILLNO", nullable: true, length: 4 })
  billno: string | null;

  @Column("varchar2", { name: "BILLSTATUS", nullable: true, length: 1 })
  billstatus: string | null;

  @Column("varchar2", { name: "PSG", nullable: true, length: 1 })
  psg: string | null;

  @Column("varchar2", { name: "PSAMPLE", nullable: true, length: 1 })
  psample: string | null;

  @Column("varchar2", { name: "PRO_CODE", nullable: true, length: 4 })
  proCode: string | null;

  @Column("varchar2", { name: "DCODE", nullable: true, length: 4 })
  dcode: string | null;

  @Column("varchar2", { name: "PURWEG", nullable: true, length: 4 })
  purweg: string | null;

  @Column("varchar2", { name: "PSTONEWT", nullable: true, length: 4 })
  pstonewt: string | null;

  @Column("varchar2", { name: "PURRATE", nullable: true, length: 4 })
  purrate: string | null;

  @Column("varchar2", { name: "WASTAGE", nullable: true, length: 4 })
  wastage: string | null;

  @Column("varchar2", { name: "PURAMT", nullable: true, length: 4 })
  puramt: string | null;

  @Column("varchar2", { name: "TOTST", nullable: true, length: 4 })
  totst: string | null;

  @Column("varchar2", { name: "CASHAMT", nullable: true, length: 4 })
  cashamt: string | null;
}
