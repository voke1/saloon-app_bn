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
import {OfferService } from './offer.service';
import { Offer } from './interfaces/offer.interface';
import { AuthGuard } from '../middleware/auth.middleware';


@Controller('api/v1')
export class OfferController {

    constructor(private offers: OfferService) { }


    @Post('offer')
    // @UseGuards(new AuthGuard())
    createOffer(
        @Body() Offer: Offer,

    ): Promise<Offer> {
        return this.offers.createOffer(Offer);
    }

    @Get('offer/all')
    findOffers(): Promise<Offer[]> {
        return this.offers.getOffers();
    }

    @Get('offer/:offerId')
    findOffer(@Param('offerId') offerId): Promise<Offer[]> {
        return this.offers.getOffer(offerId);
    }


    @Delete('offer/:offerId')
    // @UseGuards(new AuthGuard())
    delete(@Param('offerId') id): Promise<Offer> {
        return this.offers.delete(id);
    }
}
