import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity} from './users.entity';
import { UsersResolver } from './user.resolver';
import { UsersService } from './users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
    ],
    providers: [UsersResolver,UsersService],
})
export class UsersModule {}