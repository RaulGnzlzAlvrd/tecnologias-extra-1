import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rates } from '../models/rates';

const api_uri = 'https://api.exchangerate-api.com/v4/latest';

@Injectable({
  providedIn: 'root'
})
export class RatesService {

  constructor(
    private http: HttpClient
  ) { }

  getRates(base: string) {
    return this.http.get<Rates>(api_uri + '/' + base);
  }

}
