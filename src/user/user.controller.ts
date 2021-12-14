import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Patch,
    Body,
    Req,
    Res,
    Param,
    UseGuards,
    Query,
} from '@nestjs/common';
import {UserService } from './user.service';
import { User } from './interfaces/user.interface'
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class UserController {
    constructor(private readonly UserService: UserService) { }



    @Post('auth/user/signup')
    async Signup(
        @Body() user: User,
        @Req() req,
        @Res() res,
    ): Promise<User> {
        console.log('USER: ', user)

        return await this.UserService.signUp(user, res);
    }

    
    @Post('auth/user/signin')
    async Signin(
        @Body() user: User,
        @Req() req,
        @Res() res,
    ): Promise<User> {
     console.log('USER: ', user)

        return await this.UserService.signIn(user, res);
    }

    @Get('user/all')
    findMarkets(): Promise<User[]> {
        return this.UserService.getUsers();
    }

    @Get('user/:userId')
    findCustomer(@Param('userId') customerId): Promise<User[]> {
        return this.UserService.getUser(customerId);
    }


    @Delete('user/:userId')
    @UseGuards(new AuthGuard())
    delete(@Param('userId') id): Promise<User> {
        return this.UserService.delete(id);
    }


}
