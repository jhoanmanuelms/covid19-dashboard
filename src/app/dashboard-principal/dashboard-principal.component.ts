import { Component, OnInit } from '@angular/core';
import {CovidStats} from '../model/covid-stats';
import {CovidApiService} from '../service/covid-api.service';

@Component({
  selector: 'app-dashboard-principal',
  templateUrl: './dashboard-principal.component.html',
  styleUrls: ['./dashboard-principal.component.css']
})
export class DashboardPrincipalComponent implements OnInit {
  private deathCases: CovidStats[];
  private recoveryCases: CovidStats[];
  private confirmedCases: CovidStats[];

  constructor(private covidApiService: CovidApiService) { }

  ngOnInit() {
    this.covidApiService.getDeathCases().subscribe(stats => this.deathCases = stats);
    this.covidApiService.getRecoveryCases().subscribe(stats => this.recoveryCases = stats);
    this.covidApiService.getConfirmedCases().subscribe(stats => this.confirmedCases = stats);
  }

  getLatestConfirmedCases(): number {
    return this.confirmedCases[this.confirmedCases.length - 1].Cases;
  }

  getLatestDeathCases(): number {
    return this.deathCases[this.deathCases.length - 1].Cases;
  }

  getLatestRecoveryCases(): number {
    return this.recoveryCases[this.recoveryCases.length - 1].Cases;
  }

  getLatestUpdated(): Date {
    return this.recoveryCases[this.recoveryCases.length - 1].Date;
  }
}
