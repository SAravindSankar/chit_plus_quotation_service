import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008394", ["tgrClaimpk"], { unique: true })
@Entity("TGR_CLAIMS")
export class TgrClaims {
  @Column("number", {
    primary: true,
    name: "TGR_CLAIMPK",
    precision: 8,
    scale: 0,
  })
  tgrClaimpk: number;

  @Column("number", { name: "TGR_CLAIM_NO", precision: 6, scale: 0 })
  tgrClaimNo: number;

  @Column("date", { name: "TGR_CLAIM_DATE" })
  tgrClaimDate: Date;

  @Column("number", { name: "VENDORFK", precision: 6, scale: 0 })
  vendorfk: number;

  @Column("number", { name: "TRAN_ADDFK", precision: 6, scale: 0 })
  tranAddfk: number;

  @Column("varchar2", { name: "VEN_REF", length: 20 })
  venRef: string;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("number", { name: "CBYFK", precision: 4, scale: 0 })
  cbyfk: number;

  @Column("date", { name: "CDATE", nullable: true })
  cdate: Date | null;

  @Column("number", { name: "MBYFK", nullable: true, precision: 4, scale: 0 })
  mbyfk: number | null;

  @Column("date", { name: "MDATE", nullable: true })
  mdate: Date | null;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "TRANYEAR", nullable: true, length: 4 })
  tranyear: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
