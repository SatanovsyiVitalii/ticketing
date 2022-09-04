import { Publisher, OrderCreatedEvent, Subjects } from '@svticket/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}