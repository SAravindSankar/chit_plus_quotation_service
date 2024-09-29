import { Column, Entity } from "typeorm";

@Entity("BS_REC1")
export class BsRec1 {
  @Column("varchar2", { name: "BILLTYPE", nullable: true, length: 2 })
  billtype: string | null;

  @Column("date", { name: "BILLDATE", nullable: true })
  billdate: Date | null;

  @Column("varchar2", { name: "BILLNO", nullable: true, length: 4 })
  billno: string | null;

  @Column("varchar2", { name: "TAGNO", nullable: true, length: 5 })
  tagno: string | null;

  @Column("varchar2", { name: "SALAMT", nullable: true, length: 4 })
  salamt: string | null;
}
