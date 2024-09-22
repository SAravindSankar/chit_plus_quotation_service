import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008026", ["empAdpk"], { unique: true })
@Entity("MAS_EMP_AD")
export class MasEmpAd {
  @Column("number", { primary: true, name: "EMP_ADPK", precision: 8, scale: 0 })
  empAdpk: number;

  @Column("number", { name: "EMPFK", nullable: true, precision: 8, scale: 0 })
  empfk: number | null;

  @Column("number", {
    name: "ALLOW_DEDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  allowDedfk: number | null;

  @Column("varchar2", { name: "REF_NO", nullable: true, length: 25 })
  refNo: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
