import { Column, Entity, Index } from "typeorm";

@Index("SYS_C008398", ["tgrClaimDetpk"], { unique: true })
@Entity("TGR_CLAIMS_DET")
export class TgrClaimsDet {
  @Column("number", {
    primary: true,
    name: "TGR__CLAIM_DETPK",
    precision: 8,
    scale: 0,
  })
  tgrClaimDetpk: number;

  @Column("number", { name: "TGR_CLAIMFK", precision: 6, scale: 0 })
  tgrClaimfk: number;

  @Column("number", { name: "PRODFK", precision: 6, scale: 0 })
  prodfk: number;

  @Column("number", { name: "UOMFK", precision: 4, scale: 0 })
  uomfk: number;

  @Column("number", { name: "QTY", nullable: true, precision: 8, scale: 3 })
  qty: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

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
