import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Order } from '../models/order.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {}
  orders: Order[] = [];

  getAllOrders() {
    return this.http.get<Order[]>('/api/orders/')
    .map(data => {
      return this.orders = data['Orders'];
    });
  }

  returnOrder() {
    return this.orders;
  }

  createOrder(order: Order) {
    return this.http.post('/api/orders', order)
      .map((data) => data['orderCreated'])
  }

  getOrder(orderId: string) {
    return this.http.get(`/api/orders/${orderId}`)
      .map((data) => data['Order'])
  }

  updateOrder(order: Order) {
    return this.http.post(`/api/orders/${order._id}`, order)
      .map((data) => data['orderUpdated'])
  }

  deleteOrder(orderId: string) {
    return this.http.delete(`/api/orders/${orderId}`)
      .map((data) => data['orderDeleted'])
  }

}

