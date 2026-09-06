/* eslint-disable @typescript-eslint/no-wrapper-object-types */
/* eslint-disable prettier/prettier */
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    // Circular Dependency
    constructor(@Inject(forwardRef(() => UsersService)) private readonly userService: UsersService) {}

    isAUthenticated: Boolean = false;

    login(email: string, password: string) {
        // console.log(email);
        // console.log(password);

        // console.log(this.userService.users);
        
        
        const user = this.userService.users.find(u => u.email === email && u.password === password)

        if(user) {
            this.isAUthenticated = true;
            return 'MY_TOKEN'
        }
        return "User not found!"
    }
}
