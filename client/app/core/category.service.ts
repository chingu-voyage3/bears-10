import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
    constructor(
        private http: HttpClient
    ) {}

    deleteAt(i, itemId) {
        console.log('in delete at method', i, itemId);

    }

    submit(options) {
        console.log('submitting category: ' + options);
    }

}
