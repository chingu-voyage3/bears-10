import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ReceiptService {
    constructor(private http: HttpClient) {}

    completeReceipt(receipt) {
        console.log('complete receipt method fired!');
        console.log('receipt is: ', receipt);
        // this.httpClient.post(`/api/receipts/new`, receipt);
        return this.http.post('/api/receipts/', receipt).subscribe(data => console.log('data is' + data));
    }
}
