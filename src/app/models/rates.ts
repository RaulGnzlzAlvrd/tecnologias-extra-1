export class Rates {
    base:string;
    date:Date;
    time_last_updated:number;
    rates:Rate[];

    constructor() {}
}

export class Rate {
    currency:string;
    value:number;

    constructor(currency, value) {
        this.currency = currency;
        this.value = value;    
    }
}