import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ItemsService } from '../../../core/items.service';
import { Item } from '../../../models/item.interface';

@Component({
  selector: 'ims-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.scss']
})
export class ViewItemComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute,
    private itemsService: ItemsService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.item = this.itemsService.getItem(params.SKU);
        }
      );
  }

}
