import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {
    constructor(
        private http: HttpClient
    ) {}


    deleteAt(i, itemId) {
        this.http.put('/api/items/deleteCategory/' + i + '/' + itemId, null, {})
            .subscribe();

    }

    submit(options) {
        this.http.put('/api/items/addCategory/' + options.category + '/' + options.itemId, null, {})
        .subscribe();
    }

}
