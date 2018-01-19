import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { Item } from '../../../models/item.interface';

@Component({
  selector: 'ims-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  @Input() items: Item[];
  @Output() editItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  dialogRef: MatDialogRef<DeleteDialogComponent>;

  openDialog(item: Item) {
    this.dialogRef = this.dialog.open(DeleteDialogComponent);

    this.dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      } else {
        this.deleteItem.emit(item);
      }
    })
  }
}

