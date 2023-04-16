import {
  CreateDateColumn,
  Column,
  Entity,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { OmitType } from '@nestjs/swagger';
import { RoadAccident } from '../../roadAccidents/entities/roadAccident.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  department: string;

  @Column({ type: 'text', nullable: false })
  username: string;

  @Column({ type: 'text', nullable: false, select: false })
  password: string;

  @OneToMany(
    () => RoadAccident,
    (roadAccident) => roadAccident.trafficPoliceOfficer,
  )
  roadAccidents: RoadAccident[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}

export class UserWithoutPassword extends OmitType(User, ['password']) {}
