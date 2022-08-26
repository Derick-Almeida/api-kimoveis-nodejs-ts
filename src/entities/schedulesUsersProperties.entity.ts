import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./users.entity";

@Entity("scheluders_users_properties")
class ScheluderUserPropertie {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ type: "date" })
  date: Date;

  @Column({ type: "time" })
  hour: Date;

  @ManyToOne(() => Property)
  property: Property;

  @ManyToOne(() => User)
  user: User;
}

export { ScheluderUserPropertie };
