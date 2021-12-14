import { Injectable } from '@nestjs/common';
import { Service } from './interfaces/service.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class Services {

    constructor(
        @InjectModel('Service') private serviceModel: Model<Service>,
    ) { }

    async createService(service) {
        const newService = new this.serviceModel(service);

        try {
            const Service = await newService.save();
            console.log('Service saved: ', Service)
            if (Service) {
                return {
                    success: true,
                    message: 'Service has been successfully saved',
                    Service
                };
            }
            return {
                success: false,
                message: 'Service not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getService(serviceId): Promise<Service[]> {
            return await this.serviceModel.findById({ _id: serviceId });
        
    }

    async getServices(): Promise<[]> {
        return await this.serviceModel.find();
    }


    async delete(id: string): Promise<Service> {
        return await this.serviceModel.findByIdAndRemove(id);
    }

}
