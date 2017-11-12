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
  j: any;
  k: any;
  l: any;
  m: any;
  info= [];
  

  constructor(private http: Http){}

  req(id, obj){
    let myHeaders = new Headers();
    myHeaders.append('Accept', 'application/freecodecamp.twitchtv.v5+json');
    myHeaders.append('Client-ID', 'nc8vljzbq8521new6llbal7kqc9hom');
    let options = new RequestOptions({ headers: myHeaders});  
    this.http.get('https://api.twitch.tv/kraken/streams/' + id, options).subscribe(
      (res: Response) => {
        obj = res.json();
        obj.name = {name: id};
        if (obj.stream === null){
          obj.stream = {game: 'offline'};
        } 
        this.info.push(obj);
      }
    ) 
  }

  ngOnInit(){
    this.req('freecodecamp', this.g);
    this.req('noobs2ninjas', this.f);
    this.req('cretetion', this.h);
    this.req('OgamingSC2', this.i);
    this.req('ESL_SC2', this.j);
    this.req('storbeck', this.k);
    this.req('habathcx', this.l);
    this.req('RobotCaleb', this.m);
  }
}
