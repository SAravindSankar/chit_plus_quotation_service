import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { OldtarUsers } from "./OldtarUsers";
import { MasDesig } from "./MasDesig";
import { HrAppOrdDet } from "./HrAppOrdDet";

@Index("APP_ORDPK", ["appOrdpk"], { unique: true })
@Entity("HR_APP_ORD")
export class HrAppOrd {
  @Column("number", {
    primary: true,
    name: "APP_ORDPK",
    precision: 8,
    scale: 0,
  })
  appOrdpk: number;

  @Column("number", { name: "REF_NO", precision: 8, scale: 0 })
  refNo: number;

  @Column("date", { name: "REF_DATE" })
  refDate: Date;

  @Column("varchar2", { name: "NAME_CANDID", nullable: true, length: 40 })
  nameCandid: string | null;

  @Column("number", {
    name: "TRAN_ADDFK",
    nullable: true,
    precision: 8,
    scale: 0,
  })
  tranAddfk: number | null;

  @Column("date", { name: "OFFER_TILL", nullable: true })
  offerTill: Date | null;

  @Column("date", { name: "DOJ", nullable: true })
  doj: Date | null;

  @Column("date", { name: "CDATE" })
  cdate: Date;

  @Column("date", { name: "MDATE" })
  mdate: Date;

  @Column("number", { name: "ABYFK", nullable: true, precision: 4, scale: 0 })
  abyfk: number | null;

  @Column("date", { name: "ADATE", nullable: true })
  adate: Date | null;

  @Column("number", { name: "COMPANYFK", precision: 4, scale: 0 })
  companyfk: number;

  @Column("raw", { name: "RROWID", length: 16 })
  rrowid: Buffer;

  @Column("varchar2", { name: "DELFLAG", nullable: true, length: 20 })
  delflag: string | null;

  @Column("number", { name: "TFERFK", nullable: true, precision: 10, scale: 0 })
  tferfk: number | null;

  @Column("number", { name: "CFERFK", nullable: true, precision: 10, scale: 0 })
  cferfk: number | null;

  @Column("number", { name: "DOWNFK", nullable: true, precision: 10, scale: 0 })
  downfk: number | null;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.hrAppOrds)
  @JoinColumn([{ name: "CBYFK", referencedColumnName: "tarsuserspk" }])
  cbyfk: OldtarUsers;

  @ManyToOne(() => MasDesig, (masDesig) => masDesig.hrAppOrds)
  @JoinColumn([{ name: "DESIGFK", referencedColumnName: "desigpk" }])
  desigfk: MasDesig;

  @ManyToOne(() => OldtarUsers, (oldtarUsers) => oldtarUsers.hrAppOrds2)
  @JoinColumn([{ name: "MBYFK", referencedColumnName: "tarsuserspk" }])
  mbyfk: OldtarUsers;

  @OneToMany(() => HrAppOrdDet, (hrAppOrdDet) => hrAppOrdDet.appOrdfk)
  hrAppOrdDets: HrAppOrdDet[];
}
