
export interface Payment extends Document {
id?: string;
userId: string;
status: string;
paymentDate: string;
amount: string;
paymentType: string;
serviceId: string,
transaction_id: string,
tx_ref: string,
date: Date;
}




