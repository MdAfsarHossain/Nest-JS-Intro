/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-wrapper-object-types */
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class TweetService {

    constructor(private readonly userService: UsersService){}

    tweets: {text: String, date: Date, userId: Number}[] = [
        {text: "some tweet", date: new Date('2026-08-15'), userId: 1},
        {text: "some other twseet", date: new Date('2026-08-16'), userId: 2},
        {text: "some more tweet", date: new Date('2026-08-17'), userId: 1}
    ]

    getAllTweets() {
        return this.tweets;
    }

    getTweets(userId: number) {
        const user = this.userService.getUserById(userId);
        const tweets = this.tweets.filter(t => t.userId === userId);
        const response = tweets.map(t => {
            return {text: t.text, date: t.date, name: user?.name}
        })
        return response
    }
}
