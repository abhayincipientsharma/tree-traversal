import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tree-traversal';
  jsonData: any;
  // receivedData: any;

  ngOnInit() {
    // console.log('received data : ', this.receivedData);
    // this.receivedData();
  }

  receivedData(value) {
    if (value) {
      console.log('value : ', value)
      this.jsonData = value;
    }
  }
}
