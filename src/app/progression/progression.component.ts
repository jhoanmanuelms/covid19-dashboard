import { Component, Input, OnInit } from '@angular/core';
import { CovidStats } from '../model/covid-stats';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.css']
})
export class ProgressionComponent implements OnInit {
  @Input() data: CovidStats[];

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
  }

  getData() {
    return this.data.reduce((previous, current) => {
      previous.labels.push(this.datePipe.transform(current.Date, 'MMM-dd'));
      previous.datasets[0].data.push(current.Cases);

      return previous;
    }, {
      labels: [],
      datasets: [{
        label: 'Casos Confirmados',
        data: []
      }]
    });
  }
}
