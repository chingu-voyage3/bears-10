import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CategoryService } from '../../../../core/category.service';

@Component({
  selector: 'ims-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private categoryService: CategoryService) { }

  category = '';

  ngOnInit() {
  }

  cancel() {
    this.dialogRef.close();
  }

  submitCategory() {
    console.log('submitting category', this.category, 'item id is: ', this.data.item._id);
    console.log('data is: ', this.data)
    this.data.item.categories.push(this.category);
    this.dialogRef.close();
    this.categoryService.submit({ category: this.category, itemId: this.data.item._id});
  }

}
