export class CreateBookingDto {
  readonly id?: string;
  readonly userId: string;
  readonly service: string;
  readonly slot: string;
  readonly specialist: object;
  readonly date: Date;
}
