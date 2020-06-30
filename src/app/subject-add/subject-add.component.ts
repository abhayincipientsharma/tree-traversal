import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
declare var require: any
var TreeModel = require('tree-model');

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {
  fetchedData : any;
  root: any;
  constructor( 
    public dialogRef: MatDialogRef<SubjectAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.fetchedData = data.subject;
      this.root = data.root;
   }

  ngOnInit(): void {
  }

  onClickSubmit(value: NgForm) {
    let tree = new TreeModel();
    let idToAdd = null;
    this.fetchedData.filter((val, index) => {
      if (index+1 === this.fetchedData.length) {
        idToAdd = val.model.id + 1;
      }
    });
    let childNode = tree.parse({id: idToAdd, name: value.value.subject, children: {}});
    this.root.addChild(childNode);
    this.dialogRef.close({result:this.root});
  }
}
