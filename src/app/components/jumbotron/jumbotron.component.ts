import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  jbtHeading: string;
  jbtText: string;
  jbtBtnText: string;
  jbtBtnUrl: string;

  constructor() {
    this.jbtHeading = 'Hello World';
    this.jbtText = 'This is a sample Jumbotron component';
    this.jbtBtnText = 'Read More';
    this.jbtBtnUrl = 'http://snatchexcel.com';
  }

  ngOnInit() {
  }

}
