import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  @Input() deaths: number;
  @Input() confirmed: number;
  @Input() recoveries: number;
  @Input() dailyCases: number;

  constructor() { }

  ngOnInit() {
  }

}
