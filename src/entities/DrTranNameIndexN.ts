import { Column, Entity, Index } from "typeorm";

@Index("NLT_DOCID", ["nltDocid"], { unique: true })
@Entity("DR$TRAN_NAME_INDEX$N")
export class DrTranNameIndexN {
  @Column("number", {
    primary: true,
    name: "NLT_DOCID",
    precision: 38,
    scale: 0,
  })
  nltDocid: number;

  @Column("char", { name: "NLT_MARK", nullable: true, length: 1 })
  nltMark: string | null;
}
