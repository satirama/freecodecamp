import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';
  name = 'name';
  streaming = 'streaming';
  f: any;
  g: any;
  h: any;
  i: any;
  

  constructor(private http: Http){}

  req(id, obj){
    let myHeaders = new Headers();
    myHeaders.append('Accept', 'application/freecodecamp.twitchtv.v5+json');
    myHeaders.append('Client-ID', 'nc8vljzbq8521new6llbal7kqc9hom');
    let options = new RequestOptions({ headers: myHeaders});  
    this.http.get('https://api.twitch.tv/kraken/streams/' + id, options).subscribe(
      (res: Response) => obj = res.json()); 
  }

  ngOnInit(){
    this.req('freecodecamp', this.g);
    this.req('noobs2ninjas', this.f);
    this.req('RobotCaleb', this.h);
    this.req('OgamingSC2', this.i);
/*
    var arr = [this.f, this.g, this.h, this.i]

    for (var i = 0; i < arr.length; i++){
      if(arr[i].stream === null){
        arr[i].stream = 'offline';
      }
    }*/
  }
}
