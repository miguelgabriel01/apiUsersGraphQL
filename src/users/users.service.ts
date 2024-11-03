import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService{
    constructor(
        @InjectRepository(UsersEntity)
        private userRepository: Repository<UsersEntity>,
    ){}

    //operação para criar usuario
    async create(createUserDto: CreateUserDto): Promise<UsersEntity>{
        const user = this.userRepository.create(createUserDto);
        return await this,this.userRepository.save(user);
    }

    //operação para listar todos os usuarios
    async findAll(): Promise<UsersEntity[]>{
        return await this.userRepository.find();
    }

}