import { Column, Entity, Index } from "typeorm";

@Index("MISC_DET1PK", ["miscDet1Pk"], { unique: true })
@Entity("MISC_DET1")
export class MiscDet1 {
  @Column("number", {
    primary: true,
    name: "MISC_DET1PK",
    precision: 8,
    scale: 0,
  })
  miscDet1Pk: number;

  @Column("number", {
    name: "MISC_DETFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  miscDetfk: number | null;

  @Column("number", {
    name: "TYPE_GENFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  typeGenfk: number | null;

  @Column("number", {
    name: "QTY_SEND",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  qtySend: number | null;

  @Column("number", {
    name: "QTY_RECD",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  qtyRecd: number | null;

  @Column("number", {
    name: "QTY_REJECT",
    nullable: true,
    precision: 8,
    scale: 3,
  })
  qtyReject: number | null;

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

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;
}
