import { Subjects, Publisher, PaymentCreatedEvent } from '@svticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}