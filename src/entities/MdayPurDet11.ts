import { Column, Entity } from "typeorm";

@Entity("MDAY_PUR_DET11")
export class MdayPurDet11 {
  @Column("number", {
    name: "PUR_DET11PK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet11Pk: number | null;

  @Column("number", {
    name: "PUR_DET1FK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  purDet1Fk: number | null;

  @Column("varchar2", { name: "SERIAL_NO", nullable: true, length: 15 })
  serialNo: string | null;

  @Column("number", { name: "WT", nullable: true, precision: 8, scale: 3 })
  wt: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "TRAN_DOCFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranDocfk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 4, scale: 0 })
  docfk: number | null;
}
