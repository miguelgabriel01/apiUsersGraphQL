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

    //listar todos os usuarios
    @Query(() => [UsersEntity])
    async users(){
        return this.usersService.findAll();
    }

    //listar usuario especifico
    @Query(() => UsersEntity, {nullable: true})
    async user(@Args('id') id: string){
        return this.usersService.findOne(id);
    }

    //atualiza um usuario
    @Mutation(() =>UsersEntity)
    async updateUser(
        @Args('id') id: string,
        @Args('updateUserInput') updateUserInput: UpdateUserDto,
    ){
        return this.usersService.update(id, updateUserInput);
    }

    @Mutation(() => Boolean)
    async removeUser(@Args('id') id: string){
        await this.usersService.remove(id);
        return true;
    }
}
