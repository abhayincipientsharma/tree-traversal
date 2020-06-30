import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
let data = require('./tree.json');
// import * as data from '/tree/tree.json';
// import {TreeModel} from 'tree-model';
declare var require: any
var TreeModel = require('tree-model');

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
 subjects: Array<any>;
 lessons: any[] = [];
 modules: any[] = [];
 workbooks: Array<any>;
  // @Input() sentData: any;
  @Output() sentData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    console.log('DATA: ', data)
    this.tree();
  }

  tree() {
    let tree = new TreeModel();
    let root = tree.parse(data);
    this.subjects = root['children'];
    this.subjects.forEach(val => {
      this.lessons.push(val.model.children)
    })
    this.lessons.forEach((val,index) => {
      this.modules.push(val[index].children)
    })
    this.sentData.emit(data);
  }
}
