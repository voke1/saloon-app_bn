export class CreateBookingDto {
  readonly id?: string;
  readonly userId: string;
  readonly paymentId: string;
  readonly service: string;
  readonly specialist: object;
  readonly date: Date;
}
