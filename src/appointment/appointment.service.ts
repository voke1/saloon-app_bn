import { Injectable } from '@nestjs/common';
import { Appointment } from './interfaces/appointment.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppointmentService {

    constructor(
        @InjectModel('Appointment') private AppointmentModel: Model<Appointment>,
    ) { }

    async createAppointment(appointment) {
        const newAppointment = new this.AppointmentModel(appointment);

        try {
            const Appointment = await newAppointment.save();
            console.log('Appointment saved: ', Appointment)
            if (Appointment) {
                return {
                    success: true,
                    message: 'Appointment has been successfully saved',
                    Appointment
                };
            }
            return {
                success: false,
                message: 'Appointment not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getAppointment(appointmentId): Promise<Appointment[]> {
            return await this.AppointmentModel.findById({ _id: appointmentId });
        
    }

    async getAppointments(): Promise<[]> {
        return await this.AppointmentModel.find();
    }


    async delete(id: string): Promise<Appointment> {
        return await this.AppointmentModel.findByIdAndRemove(id);
    }

}
