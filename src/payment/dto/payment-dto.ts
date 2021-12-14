export class CreatePaymentDto {
  readonly id?: string;
  readonly userId: string;
  readonly status: string;
  readonly transaction_id: string;
  readonly tx_ref: string;
  readonly serviceId: string;
  readonly paymentDate: string;
  readonly amount: string;
  readonly paymentType: string;
  readonly date: Date;
}
