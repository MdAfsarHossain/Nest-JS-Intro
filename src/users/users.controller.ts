/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamDto } from './dtos/get-user-param.dto';
import { UpdateUserDto } from './dtos/update-user.dto';


@Controller('users')
export class UsersController {
    // usersService: UsersService;

    // constructor() {
    //     this.usersService = new UsersService();
    // }

    constructor(private usersService: UsersService) {
        
    }

    // @Get(':isMarried?')
    @Get()
    // getUsers(@Query() queryString: any) {
    // getUsers(@Query('name') queryString: any) {
        
    // return 'You made a GET request to get all Users!'
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number, @Param() param: GetUserParamDto) {

    console.log(limit, page);
    console.log(param);
    
    // const userService = new UsersService();
        // console.log(queryString.name);
        // console.log(queryString.gender);
        
        // if(queryString.gender) {
        //     return userService.getAllUsers().filter(u => u.gender === queryString.gender)
        // }
        
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    // Optional Params
    // @Get(':id/:name/:gender?') 
    getUserById(@Param("id", ParseIntPipe) id: number) {
        // console.log(param);
        // const usersService = new UsersService();
        // return usersService.getUserById(+id)
        return this.usersService.getUserById(id);
    }

    @Post()
    // createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
    // Global Pipes
    createUser(@Body() user: CreateUserDto) {
        
        // const user = {id: 3, name: "Tarek", age: 23, gender: "Male", isMarried: false};

        console.log(typeof user);
        console.log(user instanceof CreateUserDto)
        
        
        // const usersService = new UsersService();
        // usersService.createUser(user);
        
        return 'A new user has been created!'
    }

    @Patch()
    updateUser(@Body() user: UpdateUserDto) {
        return user;
    }

}