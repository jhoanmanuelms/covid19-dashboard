import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CovidStats} from '../model/covid-stats';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {CovidStatType} from '../model/covid-stat-type';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  private static DATA_URL = 'https://api.covid19api.com/total/country/colombia/status';

  constructor(private httpClient: HttpClient) { }

  getConfirmedCases(): Observable<CovidStats[]> {
    return this.getCases(CovidStatType.CONFIRMED);
  }

  getDeathCases(): Observable<CovidStats[]> {
    return this.getCases(CovidStatType.DEATHS);
  }

  getRecoveryCases(): Observable<CovidStats[]> {
    return this.getCases(CovidStatType.RECOVERED);
  }

  private getCases(type: CovidStatType): Observable<CovidStats[]> {
    return this.httpClient
      .get(`${CovidApiService.DATA_URL}/${type}`)
      .pipe(map(response => response as CovidStats[]));
  }
}
