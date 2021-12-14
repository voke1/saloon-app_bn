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
import {AppointmentService } from './appointment.service';
import { Appointment } from './interfaces/appointment.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class AppointmentController {

    constructor(private appointmentService: AppointmentService) { }


    @Post('appointment')
    // @UseGuards(new AuthGuard())
    createAppointment(
        @Body() Appointment: Appointment,

    ): Promise<Appointment> {
        return this.appointmentService.createAppointment(Appointment);
    }

    @Get('Appointment/all')
    findAppointments(): Promise<Appointment[]> {
        return this.appointmentService.getAppointments();
    }

    @Get('Appointment/:AppointmentId')
    findAppointment(@Param('AppointmentId') AppointmentId): Promise<Appointment[]> {
        return this.appointmentService.getAppointment(AppointmentId);
    }


    @Delete('Appointment/:AppointmentId')
    // @UseGuards(new AuthGuard())
    delete(@Param('AppointmentId') id): Promise<Appointment> {
        return this.appointmentService.delete(id);
    }
}
