export class CreateAppointmentDto {
  readonly id?: string;
  readonly userId: string;
  readonly paymentId: string;
  readonly bookingId: string;
  readonly status: string;
  readonly date: Date;
}
