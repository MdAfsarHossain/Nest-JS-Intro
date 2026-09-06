/* eslint-disable prettier/prettier */

import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class UsersService {
    // Circular Dependency
    constructor(@Inject(forwardRef(() => AuthService)) private readonly authService: AuthService){}

    users: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean, password: string}[] = [
        {id: 1, name: "Afsar", email: "afsar@gmail.com", age: 27, gender: "male", isMarried: false, password: "12345678"},
        {id: 2, name: "Shakil", email: "shakil@gmail.com", age: 32, gender: "male", isMarried: true, password: "12345678"},
        {id: 3, name: "Nahar", email: "nahar@gmail.com", age: 50, gender: "female", isMarried: true, password: "12345678"}
    ]

    getAllUsers() {
        if(this.authService.isAUthenticated) {
            return this.users;
        }
        return 'You are not logged-in!'
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id)
    }

    createUser(user: {id: number, name: string, email: string, age: number, gender: string, isMarried: boolean, password: string}) {
        this.users.push(user)
    }
}