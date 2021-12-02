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
    ]),

    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(process.env.DB_URL),
  ],

  controllers: [
AppController, 
UserController,
SpecialistController,
BookingController
  ],
  providers: [
    AppService,
    UserService,
    SpecialistService,
    ResponseService,
    BookingService,

  ],
})
export class AppModule {}
