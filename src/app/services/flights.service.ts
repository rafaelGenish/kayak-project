import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flightDataBase: Flight[] =[
    {
      code: "CT32WW",
      from: "TLV",
      to: "JFK",
      price: 590
    },
    {
      code: "CT300W",
      from: "JFK",
      to: "TLV",
      price: 590
    },
    {
      code: "FR002X",
      from: "ROMA",
      to: "AMS",
      price: 250
    },
    {
      code: "FR014X",
      from: "AMS",
      to: "ROMA",
      price: 250
    }
  ]

  constructor() { }
}

interface Flight {
  code: string,
  from: string,
  to: string,
  price: number
}
