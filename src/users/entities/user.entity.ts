/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @ApiProperty()
  @Column()
  firstName: string;
  @ApiProperty()
  @Column()
  lastName: string;
}
