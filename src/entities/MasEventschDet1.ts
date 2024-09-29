import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { MasEventsch } from "./MasEventsch";
import { JmasProduct } from "./JmasProduct";
import { MasEventschDet11 } from "./MasEventschDet11";

@Index("EVENTSCH_DET1PK", ["eventschDet1Pk"], { unique: true })
@Index("SYS_C008048", ["delflag", "eventschfk", "prodfk"], { unique: true })
@Entity("MAS_EVENTSCH_DET1")
export class MasEventschDet1 {
  @Column("number", {
    primary: true,
    name: "EVENTSCH_DET1PK",
    precision: 8,
    scale: 0,
  })
  eventschDet1Pk: number;

  @Column("number", {
    name: "EVENTSCHFK",
    nullable: true,
    unique: true,
    precision: 6,
    scale: 0,
  })
  eventschfk: number | null;

  @Column("number", {
    name: "PRODFK",
    nullable: true,
    unique: true,
    precision: 6,
    scale: 0,
  })
  prodfk: number | null;

  @Column("number", { name: "QTY", nullable: true, precision: 7, scale: 3 })
  qty: number | null;

  @Column("number", { name: "AMOUNT", nullable: true, precision: 8, scale: 2 })
  amount: number | null;

  @Column("raw", { name: "RROWID", nullable: true, length: 16 })
  rrowid: Buffer | null;

  @Column("varchar2", {
    name: "DELFLAG",
    nullable: true,
    unique: true,
    length: 20,
  })
  delflag: string | null;

  @Column("number", { name: "UOMFK", nullable: true, precision: 4, scale: 0 })
  uomfk: number | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => MasEventsch, (masEventsch) => masEventsch.masEventschDets)
  @JoinColumn([{ name: "EVENTSCHFK", referencedColumnName: "eventschpk" }])
  eventschfk2: MasEventsch;

  @ManyToOne(() => JmasProduct, (jmasProduct) => jmasProduct.masEventschDets)
  @JoinColumn([{ name: "PRODFK", referencedColumnName: "prodclasspk" }])
  prodfk2: JmasProduct;

  @OneToMany(
    () => MasEventschDet11,
    (masEventschDet11) => masEventschDet11.eventschDet1Fk
  )
  masEventschDets: MasEventschDet11[];
}
