import { Component, OnInit } from '@angular/core';
import {ConvertService} from "../services/convert.service";
import {InrToForeignRates} from "../model/inrToForeignRates.model";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {

  constructor(private convertService:ConvertService) { }

  currencies = ['INR', 'EUR', 'USD', 'CFA'];
  inCurr = "INR";
  outCurr = "EUR";

  inrToForeignRates: Array<InrToForeignRates> = [
    {name: "INR", value: 1},
    {name: "EUR", value: 0.013},
    {name: "USD", value: 0.015},
    {name: "CFA", value: 655}
  ];

  inputValue = 10;
  outputValue(input:number, inCurr:string, outCurr:string) {
    let tmpout = null;
    let tmpin = null;
    for (const key in this.inrToForeignRates) {
      if(this.inrToForeignRates[key].name === outCurr) {
        tmpout = this.inrToForeignRates[key].value;
        break;
      }
    }

    for (const key in this.inrToForeignRates) {
      if(this.inrToForeignRates[key].name === inCurr) {
        tmpin = this.inrToForeignRates[key].value;
        break;
      }
    }

    if(tmpout != null && tmpin != null) {
      return input * tmpout  / tmpin;
    }
    else
      return input;
  };

  output() {
    return this.outputValue(this.inputValue,  this.inCurr, this.outCurr);
  };

  ngOnInit(): void {
  }

}
