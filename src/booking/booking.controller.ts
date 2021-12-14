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
import {BookingService } from './booking.service';
import { Booking } from './interfaces/booking.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class BookingController {

    constructor(private bookingService: BookingService) { }


    @Post('booking')
    // @UseGuards(new AuthGuard())
    createBooking(
        @Body() Booking: Booking,

    ): Promise<Booking> {
        return this.bookingService.createBooking(Booking);
    }

    @Get('booking/all')
    findBookings(): Promise<Booking[]> {
        return this.bookingService.getBookings();
    }

    @Get('booking/:bookingId')
    findBooking(@Param('BookingId') BookingId): Promise<Booking[]> {
        return this.bookingService.getBooking(BookingId);
    }


    @Delete('booking/:bookingId')
    // @UseGuards(new AuthGuard())
    delete(@Param('bookingId') id): Promise<Booking> {
        return this.bookingService.delete(id);
    }
}
