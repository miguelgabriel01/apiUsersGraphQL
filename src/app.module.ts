import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'; // Importa o ApolloDriver
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root', 
      password: 'Bolso@2022', 
      database: 'gerenciadormotosgl', 
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Em produção, defina como "false"
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({ // Adiciona a configuração do driver
      driver: ApolloDriver, // Especifica o driver do Apollo
      autoSchemaFile: true, // Gera o schema GraphQL automaticamente
    }),
    UsersModule,
  ],
})
export class AppModule {}
