import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/typeorm/Users';

@Module({
  imports: [TypeOrmModule.forFeature([Users,],'users')],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}