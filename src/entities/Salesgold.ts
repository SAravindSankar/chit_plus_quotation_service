import { Column, Entity } from "typeorm";

@Entity("SALESGOLD")
export class Salesgold {
  @Column("varchar2", { name: "AB12_SDES3", nullable: true, length: 20 })
  ab12Sdes3: string | null;

  @Column("number", {
    name: "AB12_VALUE",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Value: number | null;

  @Column("number", {
    name: "AB12_AMT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt: number | null;

  @Column("number", {
    name: "AB12_AMTPD",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amtpd: number | null;

  @Column("number", {
    name: "AB12_ST",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12St: number | null;

  @Column("number", {
    name: "AB12_SC",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Sc: number | null;

  @Column("number", {
    name: "AB12_DISC",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Disc: number | null;

  @Column("number", {
    name: "AB12_ROUND",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Round: number | null;

  @Column("number", {
    name: "AB12_LESS",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Less: number | null;

  @Column("number", {
    name: "AB12_NETT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Nett: number | null;

  @Column("varchar2", { name: "AB12_STAT", nullable: true, length: 1 })
  ab12Stat: string | null;

  @Column("varchar2", { name: "AB12_CTRNO", nullable: true, length: 4 })
  ab12Ctrno: string | null;

  @Column("varchar2", { name: "AB12_SR", nullable: true, length: 4 })
  ab12Sr: string | null;

  @Column("varchar2", { name: "AB12_ORDER", nullable: true, length: 8 })
  ab12Order: string | null;

  @Column("varchar2", { name: "AB12_ORDTY", nullable: true, length: 1 })
  ab12Ordty: string | null;

  @Column("varchar2", { name: "AB12_MODE", nullable: true, length: 1 })
  ab12Mode: string | null;

  @Column("varchar2", { name: "AB12_CHQNO", nullable: true, length: 10 })
  ab12Chqno: string | null;

  @Column("date", { name: "AB12_CHQDT", nullable: true })
  ab12Chqdt: Date | null;

  @Column("varchar2", { name: "AB12_BANK", nullable: true, length: 20 })
  ab12Bank: string | null;

  @Column("varchar2", { name: "AB12_DELNO", nullable: true, length: 12 })
  ab12Delno: string | null;

  @Column("number", {
    name: "AB12_DLINE",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  ab12Dline: number | null;

  @Column("number", {
    name: "AB12_WTRD",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Wtrd: number | null;

  @Column("number", {
    name: "AB12_TRNNO",
    nullable: true,
    precision: 10,
    scale: 3,
  })
  ab12Trnno: number | null;

  @Column("varchar2", { name: "AB12_OTYPE", nullable: true, length: 1 })
  ab12Otype: string | null;

  @Column("varchar2", { name: "AB12_FLAG", nullable: true, length: 1 })
  ab12Flag: string | null;

  @Column("varchar2", { name: "AB12_SCHM", nullable: true, length: 8 })
  ab12Schm: string | null;

  @Column("number", {
    name: "AB12_MEMNO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Memno: number | null;

  @Column("number", {
    name: "AB12_CHTAM",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Chtam: number | null;

  @Column("number", {
    name: "AB12_FBONU",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbonu: number | null;

  @Column("number", {
    name: "AB12_PTAX",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Ptax: number | null;

  @Column("varchar2", { name: "AB12_SCH2", nullable: true, length: 8 })
  ab12Sch2: string | null;

  @Column("number", {
    name: "AB12_MEM2",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem2: number | null;

  @Column("number", {
    name: "AB12_AMT2",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt2: number | null;

  @Column("number", {
    name: "AB12_FBS2",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs2: number | null;

  @Column("varchar2", { name: "AB12_SCH3", nullable: true, length: 8 })
  ab12Sch3: string | null;

  @Column("number", {
    name: "AB12_MEM3",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem3: number | null;

  @Column("number", {
    name: "AB12_AMT3",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt3: number | null;

  @Column("number", {
    name: "AB12_FBS3",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs3: number | null;

  @Column("varchar2", { name: "AB12_SCH4", nullable: true, length: 8 })
  ab12Sch4: string | null;

  @Column("number", {
    name: "AB12_MEM4",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem4: number | null;

  @Column("number", {
    name: "AB12_AMT4",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt4: number | null;

  @Column("number", {
    name: "AB12_FBS4",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs4: number | null;

  @Column("varchar2", { name: "AB12_SCH5", nullable: true, length: 8 })
  ab12Sch5: string | null;

  @Column("number", {
    name: "AB12_MEM5",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem5: number | null;

  @Column("number", {
    name: "AB12_AMT5",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt5: number | null;

  @Column("number", {
    name: "AB12_FBS5",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs5: number | null;

  @Column("varchar2", { name: "AB12_SCH6", nullable: true, length: 8 })
  ab12Sch6: string | null;

  @Column("number", {
    name: "AB12_MEM6",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem6: number | null;

  @Column("number", {
    name: "AB12_AMT6",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt6: number | null;

  @Column("number", {
    name: "AB12_FBS6",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs6: number | null;

  @Column("varchar2", { name: "AB12_SCH7", nullable: true, length: 8 })
  ab12Sch7: string | null;

  @Column("number", {
    name: "AB12_MEM7",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem7: number | null;

  @Column("number", {
    name: "AB12_AMT7",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt7: number | null;

  @Column("number", {
    name: "AB12_FBS7",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs7: number | null;

  @Column("varchar2", { name: "AB12_SCH8", nullable: true, length: 8 })
  ab12Sch8: string | null;

  @Column("number", {
    name: "AB12_MEM8",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  ab12Mem8: number | null;

  @Column("number", {
    name: "AB12_AMT8",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amt8: number | null;

  @Column("number", {
    name: "AB12_FBS8",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Fbs8: number | null;

  @Column("varchar2", { name: "AB12_CCAC", nullable: true, length: 6 })
  ab12Ccac: string | null;

  @Column("varchar2", { name: "AB12_CARD", nullable: true, length: 20 })
  ab12Card: string | null;

  @Column("varchar2", { name: "AB12_CCNO", nullable: true, length: 20 })
  ab12Ccno: string | null;

  @Column("number", {
    name: "AB12_AMTCC",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amtcc: number | null;

  @Column("number", {
    name: "AB12_AMTCA",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amtca: number | null;

  @Column("number", {
    name: "AB12_AMTCH",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Amtch: number | null;

  @Column("varchar2", { name: "AB12_CSHBK", nullable: true, length: 6 })
  ab12Cshbk: string | null;

  @Column("number", {
    name: "AB12_CATRN",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Catrn: number | null;

  @Column("number", {
    name: "AB12_CHTRN",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Chtrn: number | null;

  @Column("number", {
    name: "AB12_CCTRN",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Cctrn: number | null;

  @Column("number", {
    name: "AB12_CHTTR",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Chttr: number | null;

  @Column("date", { name: "AB12_CCEXP", nullable: true })
  ab12Ccexp: Date | null;

  @Column("varchar2", { name: "AB12_CCANO", nullable: true, length: 15 })
  ab12Ccano: string | null;

  @Column("number", {
    name: "AB12_RMKNO",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Rmkno: number | null;

  @Column("number", {
    name: "AB12_VACHT",
    nullable: true,
    precision: 12,
    scale: 0,
  })
  ab12Vacht: number | null;

  @Column("varchar2", { name: "AB12_TOKEN", nullable: true, length: 20 })
  ab12Token: string | null;

  @Column("varchar2", { name: "AB12_SERNO", nullable: true, length: 12 })
  ab12Serno: string | null;

  @Column("varchar2", { name: "AB12_OTHAC", nullable: true, length: 6 })
  ab12Othac: string | null;

  @Column("number", {
    name: "AB12_AMTOH",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  ab12Amtoh: number | null;

  @Column("number", {
    name: "AB12_OHTRN",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  ab12Ohtrn: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "PRODFK", nullable: true, precision: 8, scale: 0 })
  prodfk: number | null;

  @Column("varchar2", { name: "AB12_NO", nullable: true, length: 8 })
  ab12No: string | null;

  @Column("varchar2", { name: "AB12_TYPE", nullable: true, length: 1 })
  ab12Type: string | null;

  @Column("date", { name: "AB12_DATE", nullable: true })
  ab12Date: Date | null;

  @Column("varchar2", { name: "AB12_PARTY", nullable: true, length: 6 })
  ab12Party: string | null;

  @Column("varchar2", { name: "AB12_NAME", nullable: true, length: 30 })
  ab12Name: string | null;

  @Column("varchar2", { name: "AB12_ADR", nullable: true, length: 30 })
  ab12Adr: string | null;

  @Column("varchar2", { name: "AB12_ADR2", nullable: true, length: 30 })
  ab12Adr2: string | null;

  @Column("varchar2", { name: "AB12_ADR3", nullable: true, length: 30 })
  ab12Adr3: string | null;

  @Column("varchar2", { name: "AB12_PROD", nullable: true, length: 8 })
  ab12Prod: string | null;

  @Column("varchar2", { name: "AB12_DESC", nullable: true, length: 60 })
  ab12Desc: string | null;

  @Column("varchar2", { name: "AB12_DESC2", nullable: true, length: 60 })
  ab12Desc2: string | null;

  @Column("varchar2", { name: "AB12_QLTY", nullable: true, length: 10 })
  ab12Qlty: string | null;

  @Column("number", {
    name: "AB12_GWT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Gwt: number | null;

  @Column("number", {
    name: "AB12_WASTE",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Waste: number | null;

  @Column("number", {
    name: "AB12_NETWT",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Netwt: number | null;

  @Column("number", {
    name: "AB12_QTY",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  ab12Qty: number | null;

  @Column("number", {
    name: "AB12_RATE",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Rate: number | null;

  @Column("number", {
    name: "AB12_MNO",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Mno: number | null;

  @Column("number", {
    name: "AB12_MCHG",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Mchg: number | null;

  @Column("number", {
    name: "AB12_MNO2",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Mno2: number | null;

  @Column("number", {
    name: "AB12_MCHG2",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Mchg2: number | null;

  @Column("number", {
    name: "AB12_MNO3",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Mno3: number | null;

  @Column("number", {
    name: "AB12_MCHG3",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Mchg3: number | null;

  @Column("number", {
    name: "AB12_SNO",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Sno: number | null;

  @Column("number", {
    name: "AB12_SCHG",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Schg: number | null;

  @Column("number", {
    name: "AB12_SNO2",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Sno2: number | null;

  @Column("number", {
    name: "AB12_SCHG2",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Schg2: number | null;

  @Column("number", {
    name: "AB12_SNO3",
    nullable: true,
    precision: 7,
    scale: 0,
  })
  ab12Sno3: number | null;

  @Column("number", {
    name: "AB12_SCHG3",
    nullable: true,
    precision: 12,
    scale: 3,
  })
  ab12Schg3: number | null;

  @Column("varchar2", { name: "AB12_MUNT", nullable: true, length: 1 })
  ab12Munt: string | null;

  @Column("varchar2", { name: "AB12_MUNT2", nullable: true, length: 1 })
  ab12Munt2: string | null;

  @Column("varchar2", { name: "AB12_MUNT3", nullable: true, length: 1 })
  ab12Munt3: string | null;

  @Column("varchar2", { name: "AB12_SUNT", nullable: true, length: 1 })
  ab12Sunt: string | null;

  @Column("varchar2", { name: "AB12_SUNT2", nullable: true, length: 1 })
  ab12Sunt2: string | null;

  @Column("varchar2", { name: "AB12_SUNT3", nullable: true, length: 1 })
  ab12Sunt3: string | null;

  @Column("varchar2", { name: "AB12_MDES", nullable: true, length: 20 })
  ab12Mdes: string | null;

  @Column("varchar2", { name: "AB12_MDES2", nullable: true, length: 20 })
  ab12Mdes2: string | null;

  @Column("varchar2", { name: "AB12_MDES3", nullable: true, length: 20 })
  ab12Mdes3: string | null;

  @Column("varchar2", { name: "AB12_SDES", nullable: true, length: 20 })
  ab12Sdes: string | null;

  @Column("varchar2", { name: "AB12_SDES2", nullable: true, length: 20 })
  ab12Sdes2: string | null;
}
