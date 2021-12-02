import { Injectable } from '@nestjs/common';
import { Booking } from './interfaces/booking.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookingService {

    constructor(
        @InjectModel('Booking') private BookingModel: Model<Booking>,
    ) { }

    async createBooking(booking) {
        const newBooking = new this.BookingModel(booking);

        try {
            const booking = await newBooking.save();
            console.log('booking saved: ', booking)
            if (booking) {
                return {
                    success: true,
                    message: 'booking has been successfully saved',
                    booking
                };
            }
            return {
                success: false,
                message: 'booking not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getBooking(bookingId): Promise<Booking[]> {
            return await this.BookingModel.findById({ _id: bookingId });
        
    }

    async getBookings(): Promise<[]> {
        return await this.BookingModel.find();
    }


    async delete(id: string): Promise<Booking> {
        return await this.BookingModel.findByIdAndRemove(id);
    }

}
