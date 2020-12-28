import { Component, OnInit } from '@angular/core';
import { Rate, Rates } from 'src/app/models/rates';
import { RatesService } from 'src/app/services/rates.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent implements OnInit {

  rates:Rates = new Rates();
  currency:string;
  currencies:string[] = [];
  query:string = 'USD';
  validInput:boolean = false;

  constructor(
    private ratesService:RatesService
  ) { }

  ngOnInit(): void {
    this.getRates();
  }

  getRates() {
    this.ratesService.getRates(this.query).subscribe(
      res => {
        this.rates = res;
        this.currency = res.base;
        const ratesList:Rate[] = [];
        for(const currency of Object.keys(res.rates)) {
          ratesList.push(new Rate(currency, res.rates[currency]));
          this.currencies.push(currency);
        }
        this.rates.rates = ratesList;
        this.query = '';
      },
      err => Swal.fire({
            icon: 'error',
            title: `Código no soportado: ${this.query.toUpperCase()}`
          })
    );
  }

}
