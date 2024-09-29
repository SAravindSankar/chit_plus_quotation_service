import { Column, Entity } from "typeorm";

@Entity("BS_BILLS1")
export class BsBills1 {
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

  @Column("varchar2", { name: "SSG", nullable: true, length: 1 })
  ssg: string | null;

  @Column("date", { name: "ORDDATE", nullable: true })
  orddate: Date | null;

  @Column("varchar2", { name: "SSAMPLE", nullable: true, length: 1 })
  ssample: string | null;

  @Column("varchar2", { name: "PRO_CODE", nullable: true, length: 4 })
  proCode: string | null;

  @Column("varchar2", { name: "DCODE", nullable: true, length: 4 })
  dcode: string | null;

  @Column("varchar2", { name: "SALWEG", nullable: true, length: 4 })
  salweg: string | null;

  @Column("varchar2", { name: "SALRATE", nullable: true, length: 4 })
  salrate: string | null;

  @Column("varchar2", { name: "MKCHARGE", nullable: true, length: 4 })
  mkcharge: string | null;

  @Column("varchar2", { name: "SWASTAGE", nullable: true, length: 4 })
  swastage: string | null;

  @Column("varchar2", { name: "KDM", nullable: true, length: 1 })
  kdm: string | null;

  @Column("varchar2", { name: "HCPERCEN", nullable: true, length: 4 })
  hcpercen: string | null;

  @Column("varchar2", { name: "HCHARGES", nullable: true, length: 4 })
  hcharges: string | null;

  @Column("varchar2", { name: "MINWAST", nullable: true, length: 4 })
  minwast: string | null;

  @Column("varchar2", { name: "MINMAK", nullable: true, length: 4 })
  minmak: string | null;

  @Column("varchar2", { name: "SALAMT", nullable: true, length: 4 })
  salamt: string | null;

  @Column("varchar2", { name: "HOME", nullable: true, length: 1 })
  home: string | null;

  @Column("varchar2", { name: "TAGNO", nullable: true, length: 5 })
  tagno: string | null;

  @Column("varchar2", { name: "TAGWT", nullable: true, length: 4 })
  tagwt: string | null;

  @Column("varchar2", { name: "TAGRATE", nullable: true, length: 4 })
  tagrate: string | null;

  @Column("varchar2", { name: "STONENO", nullable: true, length: 4 })
  stoneno: string | null;

  @Column("varchar2", { name: "STONEWT", nullable: true, length: 4 })
  stonewt: string | null;

  @Column("varchar2", { name: "STONEAMT", nullable: true, length: 4 })
  stoneamt: string | null;

  @Column("varchar2", { name: "TOTST", nullable: true, length: 4 })
  totst: string | null;

  @Column("varchar2", { name: "CHQAMT", nullable: true, length: 4 })
  chqamt: string | null;

  @Column("varchar2", { name: "CARDAMT", nullable: true, length: 4 })
  cardamt: string | null;

  @Column("varchar2", { name: "CASHAMT", nullable: true, length: 4 })
  cashamt: string | null;

  @Column("varchar2", { name: "CREDITAMT", nullable: true, length: 4 })
  creditamt: string | null;

  @Column("varchar2", { name: "CHITAMT", nullable: true, length: 4 })
  chitamt: string | null;

  @Column("varchar2", { name: "LESSAMT", nullable: true, length: 4 })
  lessamt: string | null;
}
