import { InputType, Field } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsString, Length, Matches} from 'class-validator';



@InputType()
export class CreateUserDto{
    @Field()
    @IsNotEmpty({message: 'O nome completo é obrigatorio.'})
    @IsString({message: 'O campo precisa ser uma String.'})
    @Length(10,50,{message: "O nome completo precisa ter no minimo, 10 caracteres."})
    fullName: string;

    @Field()
    @IsNotEmpty({message: "O email é obrigatorio."})
    @IsEmail({},{message: 'O campo precisa ser um email valido.'})
    email: string;

    @Field({nullable: true})
    @Matches(/^\d{11}$/,{message: "O campo telefone residencial precisa conter 11 digitos."})
    homePhone?: string;

    @Field()
    @Field({nullable: true})
    @Matches(/^\d{11}$/,{message: "O campo telefone whatsApp precisa conter 11 digitos."})
    whatsappPhone?: string;
}