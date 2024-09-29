import { Column, Entity } from "typeorm";

@Entity("SCHEME")
export class Scheme {
  @Column("varchar2", { name: "SC_NO", nullable: true, length: 8 })
  scNo: string | null;

  @Column("varchar2", { name: "SC_INSTAMT", nullable: true, length: 40 })
  scInstamt: string | null;

  @Column("varchar2", { name: "SC_INBONUS", nullable: true, length: 40 })
  scInbonus: string | null;

  @Column("varchar2", { name: "SC_FNBONUS", nullable: true, length: 40 })
  scFnbonus: string | null;

  @Column("varchar2", { name: "SC_INSTCT", nullable: true, length: 40 })
  scInstct: string | null;

  @Column("varchar2", { name: "SC_BRATE", nullable: true, length: 40 })
  scBrate: string | null;

  @Column("varchar2", { name: "SC_NXTMEM", nullable: true, length: 40 })
  scNxtmem: string | null;

  @Column("varchar2", { name: "SC_ACTMEM", nullable: true, length: 40 })
  scActmem: string | null;

  @Column("varchar2", { name: "SC_MEMJ", nullable: true, length: 40 })
  scMemj: string | null;

  @Column("varchar2", { name: "SC_MEMT", nullable: true, length: 40 })
  scMemt: string | null;

  @Column("varchar2", { name: "SC_MEMC", nullable: true, length: 40 })
  scMemc: string | null;

  @Column("varchar2", { name: "SC_MEMCM", nullable: true, length: 40 })
  scMemcm: string | null;

  @Column("varchar2", { name: "SC_DUEDT", nullable: true, length: 40 })
  scDuedt: string | null;

  @Column("varchar2", { name: "SC_BONFROM", nullable: true, length: 40 })
  scBonfrom: string | null;

  @Column("varchar2", { name: "SC_CHITAC", nullable: true, length: 6 })
  scChitac: string | null;

  @Column("varchar2", { name: "SC_BONUSAC", nullable: true, length: 6 })
  scBonusac: string | null;

  @Column("number", { name: "SC_DEL", nullable: true, precision: 5, scale: 0 })
  scDel: number | null;

  @Column("varchar2", { name: "SC_NXTREC", nullable: true, length: 40 })
  scNxtrec: string | null;

  @Column("number", {
    name: "SC_CLOSED",
    nullable: true,
    precision: 5,
    scale: 0,
  })
  scClosed: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
