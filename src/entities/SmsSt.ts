import { Column, Entity } from "typeorm";

@Entity("SMS_ST")
export class SmsSt {
  @Column("number", { name: "SMSPK", nullable: true, precision: 10, scale: 0 })
  smspk: number | null;

  @Column("number", { name: "TYPEFK", nullable: true, precision: 10, scale: 0 })
  typefk: number | null;

  @Column("number", {
    name: "TRANADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranaddfk: number | null;

  @Column("number", { name: "TYPENO", nullable: true, precision: 10, scale: 0 })
  typeno: number | null;

  @Column("date", { name: "TYPEDT", nullable: true })
  typedt: Date | null;

  @Column("number", {
    name: "TYPEAMT",
    nullable: true,
    precision: 12,
    scale: 2,
  })
  typeamt: number | null;

  @Column("varchar2", { name: "NAME", nullable: true, length: 50 })
  name: string | null;

  @Column("number", {
    name: "CHITINSNO",
    nullable: true,
    precision: 3,
    scale: 0,
  })
  chitinsno: number | null;

  @Column("number", { name: "MOBILE", nullable: true, precision: 10, scale: 0 })
  mobile: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 10, scale: 0 })
  custfk: number | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 10,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("varchar2", { name: "MSG1", nullable: true, length: 200 })
  msg1: string | null;

  @Column("varchar2", { name: "MSG2", nullable: true, length: 160 })
  msg2: string | null;

  @Column("varchar2", { name: "STATUS", nullable: true, length: 15 })
  status: string | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 25 })
  delflag: string | null;
}
