import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable()
export class PremiershipDataService {
  private premiershipUrl = `${environment.apiUrl}/api/proxy/rounds`;

  constructor(private http: HttpClient) {
  }

  getPremiershipRounds(): Observable<any> {
    return this.http.get(this.premiershipUrl);
  }

}
