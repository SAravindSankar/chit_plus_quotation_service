import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { MasAllowDed } from "./MasAllowDed";
import { PaySalhis } from "./PaySalhis";

@Index("SYS_C008290", ["paySalhisDetpk"], { unique: true })
@Entity("PAY_SALHIS_DET")
export class PaySalhisDet {
  @Column("number", {
    primary: true,
    name: "PAY_SALHIS_DETPK",
    precision: 8,
    scale: 0,
  })
  paySalhisDetpk: number;

  @Column("number", {
    name: "EXIST_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  existAmt: number | null;

  @Column("number", {
    name: "EXIST_PER",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  existPer: number | null;

  @Column("number", {
    name: "REVISED_AMT",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  revisedAmt: number | null;

  @Column("number", {
    name: "REVISED_PER",
    nullable: true,
    precision: 10,
    scale: 2,
  })
  revisedPer: number | null;

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

  @ManyToOne(() => MasAllowDed, (masAllowDed) => masAllowDed.paySalhisDets)
  @JoinColumn([{ name: "ALL_DEDFK", referencedColumnName: "allowDedpk" }])
  allDedfk: MasAllowDed;

  @ManyToOne(() => PaySalhis, (paySalhis) => paySalhis.paySalhisDets)
  @JoinColumn([{ name: "PAY_SALHISFK", referencedColumnName: "paySalhispk" }])
  paySalhisfk: PaySalhis;
}
