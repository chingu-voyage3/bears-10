import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) { }

  getAllItems() {
    this.http.get('/api/items/all', { 
      observe: 'response'
    })
      .subscribe(response => {
        console.log(response);
      })
  }
}
