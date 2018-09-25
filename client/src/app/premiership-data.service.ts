import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PremiershipDataService {
  private premiershipUrl = 'https://s3.eu-central-1.amazonaws.com/js-assignment/data.json';

  constructor(private http: HttpClient) {
  }

  getPremiershipRounds(): Observable<any> {
    return this.http.get(this.premiershipUrl);
  }

}
