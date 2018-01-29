import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
    constructor(
        private http: HttpClient
    ) {}

    submit(category) {
        console.log('submitting category: ' + category);
    }

}
