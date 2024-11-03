import { ObjectType, Field, ID} from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@ObjectType() //Define a classe como um tipo GraphQL, permitindo que ela seja usada em schemas GraphQL
@Entity('users') //Define a classe como uma entidade do TypeORM e mapeia-a para a tabela 'users' no banco de dados
export class UsersEntity {
    @Field(()=>ID) //Define o campo 'id' como um campo GraphQL do tipo ID
    @PrimaryGeneratedColumn('uuid') //Define a coluna 'id' como chave primária, gerada automaticamente como UUID
    id: string;

    @Field() //Define o campo 'fullName' como um campo GraphQL do tipo String
    @Column() //Define 'fullName' como uma coluna no banco de dados
    fullName: string;

    @Field() //Define o campo 'email' como um campo GraphQL do tipo String
    @Column({ unique: true}) //Define 'email' como uma coluna única no banco de dados, impedindo valores duplicados
    email: string;

    @Field({nullable: true}) //Define 'homePhone' como um campo GraphQL opcional, ou seja, ele pode ser nulo
    @Column({nullable: true}) //Define 'homePhone' como uma coluna opcional no banco de dados, permitindo valores nulos
    homePhone: string;

    @Field({nullable: true}) //Define 'whatsappPhone' como um campo GraphQL opcional
    @Column({nullable: true}) //Define 'whatsappPhone' como uma coluna opcional no banco de dados
    whatsappPhone: string;
}
