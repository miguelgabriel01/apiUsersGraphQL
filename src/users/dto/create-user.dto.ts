import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateUserDto{
    @Field()
    fullName: string;

    @Field()
    email: string;

    @Field()
    homePhone?: string;

    @Field()
    whatsappPhone?: string;
}