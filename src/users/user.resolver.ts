import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UsersEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => UsersEntity)
export class UsersResolver{
    constructor(private readonly usersService: UsersService){}

    @Query(() => String)
    sayHello(): string {
        return "Olá!";
    }

    //criar usuario
    @Mutation(() => UsersEntity)
    async createUser(@Args('createUserInput') createUserInput: CreateUserDto){
        return this.usersService.create(createUserInput);
    }
}
