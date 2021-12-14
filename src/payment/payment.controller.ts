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
import {PaymentService } from './payment.service';
import { Payment } from './interfaces/payment.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class PaymentController {

    constructor(private paymentservice: PaymentService) { }


    @Post('payment')
    // @UseGuards(new AuthGuard())
    createPayment(
        @Body() payment: Payment,

    ): Promise<Payment> {
        console.log("PAYMENT: ", payment)
        return this.paymentservice.createPayment(payment);
    }

    @Get('payment/all')
    findPayment(): Promise<Payment[]> {
        return this.paymentservice.getPayments();
    }

    @Get('payment/:paymentId')
    findMarket(@Param('paymentId') paymentId): Promise<Payment[]> {
        return this.paymentservice.getPayment(paymentId);
    }


    @Delete('payment/:paymentId')
    // @UseGuards(new AuthGuard())
    delete(@Param('paymentId') id): Promise<Payment> {
        return this.paymentservice.delete(id);
    }
}
