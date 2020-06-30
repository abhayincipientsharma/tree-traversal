import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SubjectAddComponent } from '../subject-add/subject-add.component';
import { ModuleAddComponent } from '../module-add/module-add.component';
import { LessonAddComponent } from '../lesson-add/lesson-add.component';
import { WorkbookAddComponent } from '../workbook-add/workbook-add.component';


declare var require: any
var TreeModel = require('tree-model');

@Component({
  selector: 'app-tree-list',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.css']
})
export class TreeListComponent implements OnInit {
  @Input() passData: any;
  subjects: Array<any>;
  lessons: any[] = [];
  modules: any[] = [];
  showSubject = true;
  showModule = false;
  showLesson = false;
  root: any;

  constructor(private dialog: MatDialog) { }

  openDialog(type) {
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    if (type === 'subject') {
      let dialogRef = this.dialog.open(SubjectAddComponent, {
        height: '200px',
        width: '300px',
        panelClass: 'custom-dialog-container',
        data: {
          subject : this.subjects,
          root: this.root
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('result : ', result)
      })
    } else if (type === 'module') {
      this.dialog.open(ModuleAddComponent, {
        height: '200px',
        width: '300px',
        panelClass: 'custom-dialog-container'
      })
    } else if (type === 'workbook') {
      this.dialog.open(WorkbookAddComponent, {
        height: '200px',
        width: '300px',
        panelClass: 'custom-dialog-container'
      })
    }
  }

  ngOnInit(): void {
    this.setData();
  }

  setData() {
    let tree = new TreeModel();
    let root = tree.parse(this.passData);
    this.root = root;
    this.subjects = root['children'];
  }

  displayContent(data) {
    if (data.hasChildren()) {
      data.children.forEach(val => {
        this.modules.push(val.model.children)
      })
      this.showSubject = false;
      this.showModule = true;
    }
  }

  displayLesson(lesson_name) {
    let tree = new TreeModel();
    let root = tree.parse(lesson_name);
    if (root.hasChildren()) {
      root.children.forEach(element => {
        this.lessons.push(element.model)
      });
      this.showModule = false;
      this.showLesson = true;
    }
  }

  revertBack() {
    if (this.showModule) { //if Module is there
      this.showSubject = true;
      this.showModule = false;
      this.showLesson = false;
    } 
    if (this.showLesson) { //if Lesson is there
      this.showModule = true;
      this.showSubject = false;
      this.showLesson = false;
    }
    console.log('subjects : ', this.subjects)
    console.log('modules : ', this.modules)
    console.log('lessons : ', this.lessons)
  }

  addData(value) {
    this.openDialog(value);
  }

}
