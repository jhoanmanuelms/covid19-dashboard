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
    const data = this.data.reduce((previous, current) => {
      previous.labels.push(this.datePipe.transform(current.Date, 'MMM-dd'));
      previous.datasets[0].data.push(current.Cases);
      previous.datasets[1].data.push(current.Cases);

      return previous;
    }, {
      labels: [],
      datasets: [{
        label: 'Casos Confirmados',
        data: [],
        fill: false,
        borderColor: '#003366'
      }, {
        label: 'Casos Diarios',
        data: [],
        fill: false,
        borderColor: '#e63900'
      }]
    });

    data.datasets[1].data = data.datasets[1].data.map(
      (cases, idx) => idx === 0 ? 0 : cases - data.datasets[1].data[idx - 1]);

    return data;
  }

  getOptions() {
    return {
      responsive: true,
    };
  }
}
