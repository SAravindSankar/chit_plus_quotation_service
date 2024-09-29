import { Column, Entity, Index } from "typeorm";

@Index("SAL_ENQPK", ["salEnqpk"], { unique: true })
@Entity("JSAL_ENQ")
export class JsalEnq {
  @Column("number", { name: "ENQ_NO", nullable: true, precision: 5, scale: 0 })
  enqNo: number | null;

  @Column("date", { name: "ENQ_DATE", nullable: true })
  enqDate: Date | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("number", {
    name: "PRODUCTPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  productpk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 4, scale: 1 })
  qty: number | null;

  @Column("number", { name: "WEIGHT", nullable: true, precision: 8, scale: 3 })
  weight: number | null;

  @Column("number", {
    name: "TRAN_REMFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranRemfk: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("char", { name: "ENQ_ST", nullable: true, length: 1 })
  enqSt: string | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("number", {
    primary: true,
    name: "SAL_ENQPK",
    precision: 8,
    scale: 0,
  })
  salEnqpk: number;
}
