export class CreateOfferDto {
  readonly id?: string;
  readonly name: string;
  readonly description: string;
  readonly services: string;
  readonly duration: string;
  readonly amount: string;
  readonly imageUrl: string;
  readonly date?: Date;
}
