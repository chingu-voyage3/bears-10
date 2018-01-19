import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../../../models/item.interface';

@Component({
  selector: 'ims-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() items: Item[];  
  @Output() editItem = new EventEmitter();

}
