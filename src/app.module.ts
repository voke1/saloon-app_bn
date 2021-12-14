import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { SpecialistController } from './specialist/specialist.controller';
import { SpecialistService } from './specialist/specialist.service';
import { UserService } from './user/user.service';
import { ResponseService } from './utils/response-handler.service';
import { userSchema } from './user/schemas/user.schema';
import { ConfigModule } from "@nestjs/config";
import { bookingSchema } from './booking/schemas/booking.schema';
import { BookingController } from './booking/booking.controller';
import { BookingService } from './booking/booking.service';
import { specialistSchema } from './specialist/schemas/specialist.schema';
import { serviceSchema } from './service/schemas/service.schema';
import { ServiceController } from './service/service.controller';
import { Services } from './service/service.service';
import { appointmentSchema } from './appointment/schemas/appointment.schema';
import { AppointmentController } from './appointment/appointment.controller';
import { AppointmentService } from './appointment/appointment.service';
import { paymentSchema } from './payment/schemas/payment.schema';
import { PaymentController } from './payment/payment.controller';
import { PaymentService } from './payment/payment.service';



const configuration = () => ({
  port: parseInt(process.env.PORT, 10) || 8000,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
});


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "User", schema: userSchema },
      { name: "Specialist", schema: specialistSchema},
      { name: "Booking", schema: bookingSchema},
      { name: "Service", schema: serviceSchema},
      { name: "Appointment", schema: appointmentSchema},
      { name: "Payment", schema: paymentSchema},
    ]),

    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],

  controllers: [
AppController, 
UserController,
SpecialistController,
BookingController,
ServiceController,
AppointmentController,
PaymentController,
  ],
  providers: [
    AppService,
    UserService,
    SpecialistService,
    ResponseService,
    BookingService,
    Services,
    AppointmentService,
    PaymentService,

  ],
})
export class AppModule {}
