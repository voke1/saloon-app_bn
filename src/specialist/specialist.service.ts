import { Injectable } from '@nestjs/common';
import { Specialist } from './interfaces/specialist.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SpecialistService {

    constructor(
        @InjectModel('Specialist') private specialistModel: Model<Specialist>,
    ) { }

    async createSpecialist(specialist) {
        const newSpecialist = new this.specialistModel(specialist);

        try {
            const Specialist = await newSpecialist.save();
            console.log('Specialist saved: ', Specialist)
            if (Specialist) {
                return {
                    success: true,
                    message: 'Specialist has been successfully saved',
                    Specialist
                };
            }
            return {
                success: false,
                message: 'Specialist not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getSpecialist(specialistId): Promise<Specialist[]> {
            return await this.specialistModel.findById({ _id: specialistId });
        
    }

    async getSpecialists(): Promise<[]> {
        return await this.specialistModel.find();
    }


    async delete(id: string): Promise<Specialist> {
        return await this.specialistModel.findByIdAndRemove(id);
    }

}
