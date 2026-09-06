/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsString({message: "Name should be a string value."})
    @IsNotEmpty()
    @MinLength(3, {message: "Name should have a minimum of 3 character."})
    name: string;
    
    @IsEmail()
    email: string;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsNumber()
    age: number;
    
    @IsBoolean()
    isMarried: boolean;
}