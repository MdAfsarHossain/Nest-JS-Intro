/* eslint-disable prettier/prettier */
import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { TweetService } from './tweet.service';

@Controller('tweet')
export class TweetController {
    constructor(private tweetService: TweetService) {}

    // http://localhost:3000/tweet

    // For requests without userId
@Get()
public getAllTweets() {
    return this.tweetService.getAllTweets();
}

// For requests with userId
@Get(':userId') 
public getTweets(@Param('userId', ParseIntPipe) userId: number) {
    return this.tweetService.getTweets(userId);
}
    
}
