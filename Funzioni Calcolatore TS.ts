import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatore-online',
  templateUrl: './calcolatore-online.page.html',
  styleUrls: ['./calcolatore-online.page.scss'],
})
export class CalcolatoreOnlinePage implements OnInit {

  c:number;
  f:number;
  km:number;
  mi:number;

  constructor() { }

  convertitore(unita:string):void{
    if ( unita === "c") {
      this.f = Math.round((this.c * 9/5) +32);
    }
    else if ( unita === "f") {
      this.c = Math.round((this.f - 32) * 5/9);
    }
    else if ( unita === "km") {
      this.mi = Math.round( this.km / 1.609);
    }
    else if ( unita === "mi") {
      this.km = Math.round( this.mi * 1.609);
    }
  }


  ngOnInit() {
  }

}
