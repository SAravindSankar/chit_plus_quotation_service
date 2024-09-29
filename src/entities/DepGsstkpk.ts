import { Column, Entity, Index } from "typeorm";

@Index("SYS_C007536", ["depGspk"], { unique: true })
@Entity("DEP_GSSTKPK")
export class DepGsstkpk {
  @Column("number", { primary: true, name: "DEP_GSPK", precision: 6, scale: 0 })
  depGspk: number;

  @Column("number", { name: "GSSTKFK", nullable: true, precision: 6, scale: 0 })
  gsstkfk: number | null;

  @Column("number", {
    name: "BRANCHFK",
    nullable: true,
    precision: 4,
    scale: 0,
  })
  branchfk: number | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", {
    name: "DEP_AVE_GSSTKFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  depAveGsstkfk: number | null;

  @Column("number", {
    name: "DEP_REC_GSSTKFK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  depRecGsstkfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;
}
