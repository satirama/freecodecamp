import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  data: any;
  long: number;
  lat: number;
  weather = [];
  temp = {};
  place = {};
  fmin: number;
  fmax: number;
  
  constructor (private http: Http) {
   
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.long = position.coords.longitude; 
        this.http.get("https://fcc-weather-api.glitch.me/api/current?lat="+ this.lat + "&lon=" + this.long).subscribe((res: Response)=> this.data = res.json());
      });
    } 
  }

  fahrenheit(){
    this.fmin = this.data.main.temp_min * 1.8 + 32;
    this.fmax = this.data.main.temp_max * 1.8 + 32;
    document.getElementById("temp").innerHTML= "min: " + this.fmin + "°F - max: " + this.fmax + "°F";
  }

  celsius(){
    document.getElementById("temp").innerHTML= "min: " + this.data.main.temp_min + "°C - max: " + this.data.main.temp_max +"°C";
  }
}
