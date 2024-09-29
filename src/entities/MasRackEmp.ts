import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasEmp } from "./MasEmp";
import { MasRack } from "./MasRack";

@Index("EMPRACKN", ["empfk", "rackfk", "delflag"], {})
@Entity("MAS_RACK_EMP")
export class MasRackEmp {
  //DB_ERROR -> PK
  @Column("number", {
    primary: true,
    name: "RACK_EMPPK",
    nullable: true,
    precision: 6,
    scale: 0,
  })
  rackEmppk: number | null;

  @Column("number", { name: "EMPFK", nullable: true, precision: 6, scale: 0 })
  empfk: number | null;

  @Column("number", { name: "RACKFK", nullable: true, precision: 6, scale: 0 })
  rackfk: number | null;

  @Column("date", { name: "EFF_DATE", nullable: true })
  effDate: Date | null;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEmp, (masEmp) => masEmp.masRackEmps)
  @JoinColumn([{ name: "EMPFK", referencedColumnName: "emppk" }])
  empfk2: MasEmp;

  @ManyToOne(() => MasRack, (masRack) => masRack.masRackEmps)
  @JoinColumn([{ name: "RACKFK", referencedColumnName: "rackpk" }])
  rackfk2: MasRack;
}
