import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDto } from './model/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  // @UsePipes(new ValidationPipe({ transform: true }))
  postHello(@Body() user: UserDto): string {
    console.log(user);
    return "ciao";
  }

}
