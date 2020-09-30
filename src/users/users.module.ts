import { Module } from '@nestjs/common';
import { User } from './models/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './models/profile.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Profile]), 
    PermissionsModule, 
    RolesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
