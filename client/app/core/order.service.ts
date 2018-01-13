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

  constructor(
    private http: HttpClient){

      orders: Order[] = [];

      getAllOrders() {
        return this.http.get<Order[]>('/ap/order/getOrder')
        .map(data => {
          return this.orders = data['Orders'];
        });
      }
      returnOrder(){
        return this.orders;
      }

      getOrder(sku: number){
        return this.orders.find((i) => {
          return i.sku == sku;
        });
      }
    }
