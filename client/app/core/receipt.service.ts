import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'ngx-flash-messages';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class ReceiptService {
    constructor(private http: HttpClient,
                private flashMessagesService: FlashMessagesService) {}

    completeReceipt(receipt) {
        return this.http.post('/api/receipts', receipt)
                 .subscribe(data => {
                     this.flashMessagesService.show('Transaction completed!', {
                        classes: ['alert'],
                        timeout: 2000,
                      });
                     console.log('data is: ' + data)
                     return data
                 });
    }
}
