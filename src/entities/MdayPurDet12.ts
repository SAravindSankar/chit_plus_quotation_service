import { Column, Entity } from "typeorm";

@Entity("MDAY_PUR_DET12")
export class MdayPurDet12 {
  @Column("number", {
    name: "PUR_DET12PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet12Pk: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;

  @Column("char", { name: "ADD_LESS", nullable: true, length: 1 })
  addLess: string | null;

  @Column("number", { name: "ACCFK", nullable: true, precision: 6, scale: 0 })
  accfk: number | null;

  @Column("varchar2", { name: "TYPE_DESC", nullable: true, length: 20 })
  typeDesc: string | null;

  @Column("number", {
    name: "ON_WHICH",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  onWhich: number | null;

  @Column("number", {
    name: "TYPE_PER",
    nullable: true,
    precision: 6,
    scale: 2,
  })
  typePer: number | null;

  @Column("number", {
    name: "TYPE_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  typeAmt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;
}
