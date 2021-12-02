import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TokenService } from '../utils/jwt.service';
import { ResponseService } from '../utils/response-handler.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        private responseService: ResponseService,
    ) { }

    async signUp(user, res): Promise<User> {
        try {
            const foundUser = await this.userModel.findOne({email: user.email});
            if (foundUser) {
                return this.responseService.clientError(
                    res,
                    'user already exist',
                );
            }
            user.password = await bcrypt.hash(user.password, 6);
            const token = await TokenService.getToken({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }, '30d');
                user.token = token;
            const userCreated = await new this.userModel(user)
            if (userCreated) {
                userCreated.save()
                return this.responseService.requestSuccessful(res, user);
            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async signIn(user, res): Promise<User> {
        try {
            const foundUser = await this.userModel.findOne({email: user.email});
            if (foundUser) {
                const token = await TokenService.getToken({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                }, '30d');
                foundUser.token = token;
             
                return this.responseService.requestSuccessful(res, foundUser);
            }else{
                return this.responseService.clientError(
                    res,
                    'user not found',
                );

            }

        } catch (error) {
            return this.responseService.serverError(res, error.message);
        }

    }

    async getUser(userId): Promise<User[]> {
            return await this.userModel.findById({ _id: userId });
        
    }

    async getUsers(): Promise<[]> {
        return await this.userModel.find();
    }


    async delete(id: string): Promise<User> {
        return await this.userModel.findByIdAndRemove(id);
    }

}
