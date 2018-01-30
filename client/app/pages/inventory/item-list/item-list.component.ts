import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { Item } from '../../../models/item.interface';
import { CategoryService } from '../../../core/category.service';

@Component({
  selector: 'ims-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(public dialog: MatDialog,
              private categoryService: CategoryService) { }

  ngOnInit() {
  }

  @Input() items: Item[];
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  dialogRef: MatDialogRef<DeleteDialogComponent>;
  addCategoryRef: MatDialogRef<AddCategoryComponent>;

  openDialog(item: Item) {
    this.dialogRef = this.dialog.open(DeleteDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        this.deleteItem.emit(item);
      }
    });
  }

  openAddCategoryDialog(item) {
    this.addCategoryRef = this.dialog.open(AddCategoryComponent, { data: { item: item } });
  }
  deleteCategoryAtIndex(i, itemId) {
    const selected = this.items.filter(e => e._id === itemId)[0];
    selected.categories.splice(i, 1);
    this.categoryService.deleteAt(i, itemId);
  }
}

