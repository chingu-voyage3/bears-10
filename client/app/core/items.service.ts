import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Item } from '../models/item.interface';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  items: Item [] = [];

  getAllItems() {
    this.http.get('/api/items/all')
      .subscribe(data => {
        this.items = data['Items'];
        console.log(this.items);
      })
  }
}
