import { Column, Entity } from "typeorm";

@Entity("MAS_CUST_DET")
export class MasCustDet {
  @Column("number", {
    name: "CUST_DETPK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  custDetpk: number | null;

  @Column("number", { name: "CUSTFK", nullable: true, precision: 8, scale: 0 })
  custfk: number | null;

  @Column("date", { name: "DOB", nullable: true })
  dob: Date | null;

  @Column("date", { name: "DOWEDDING", nullable: true })
  dowedding: Date | null;

  @Column("varchar2", { name: "SPOUSE_NAME", nullable: true, length: 40 })
  spouseName: string | null;

  @Column("date", { name: "SPOUSE_DOB", nullable: true })
  spouseDob: Date | null;

  @Column("varchar2", { name: "CHILD1_NAME", nullable: true, length: 40 })
  child1Name: string | null;

  @Column("char", { name: "CHILD1_SEX", nullable: true, length: 1 })
  child1Sex: string | null;

  @Column("date", { name: "CHILD1_DOB", nullable: true })
  child1Dob: Date | null;

  @Column("varchar2", { name: "CHILD2_NAME", nullable: true, length: 40 })
  child2Name: string | null;

  @Column("char", { name: "CHILD2_SEX", nullable: true, length: 1 })
  child2Sex: string | null;

  @Column("date", { name: "CHILD2_DOB", nullable: true })
  child2Dob: Date | null;

  @Column("number", {
    name: "ABOUT_US_THRUFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  aboutUsThrufk: number | null;

  @Column("number", {
    name: "ABOUT_DESIGNFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  aboutDesignfk: number | null;

  @Column("number", {
    name: "ABOUT_SERVICEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  aboutServicefk: number | null;

  @Column("number", {
    name: "ABOUT_AMBIENCEFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  aboutAmbiencefk: number | null;

  @Column("number", { name: "DOCFK", nullable: true, precision: 6, scale: 0 })
  docfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
