
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Item } from '../models/item.interface';
import 'rxjs/add/operator/map';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  items: Item[] = [];

  getAllItems() {
    return this.http.get<Item[]>('/api/items/all')
      .map(data => {
        return this.items = data['Items'];
      });
  }

  returnItems() {
    return this.items;
  }

  getItem(sku: string) {
    return this.items.find((i) => {
      return i.SKU == sku;
    });
  }
}
