import { Subjects, Publisher, OrderCancelledEvent } from '@svticket/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}