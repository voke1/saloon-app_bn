import { Injectable } from '@nestjs/common';
import { Offer } from './interfaces/offer.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OfferService {

    constructor(
        @InjectModel('Offer') private offerModel: Model<Offer>,
    ) { }

    async createOffer(offer) {
        const newOffer = new this.offerModel(offer);

        try {
            const offer = await newOffer.save();
            if (offer) {
                return {
                    success: true,
                    message: 'Offer has been successfully saved',
                    offer
                };
            }
            return {
                success: false,
                message: 'Offer not saved. Please try again',
            };
        } catch (e) {
            return (e.message);
        }
    }
    async getOffer(offerId): Promise<Offer[]> {
            return await this.offerModel.findById({ _id: offerId });
        
    }

    async getOffers(): Promise<[]> {
        return await this.offerModel.find();
    }


    async delete(id: string): Promise<Offer> {
        return await this.offerModel.findByIdAndRemove(id);
    }

}
