import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { ScheluderUserPropertie } from "./schedulesUsersProperties.entity";

@Entity("properties")
class Property {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: "decimal" })
  value: number;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @CreateDateColumn({ type: "date" })
  updatedAt: Date;

  @OneToMany(
    () => ScheluderUserPropertie,
    (scheludes_users_properties) => scheludes_users_properties.property
  )
  scheludes_users_properties: ScheluderUserPropertie[];

  @ManyToOne(() => Category)
  category: Category;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;
}

export { Property };
