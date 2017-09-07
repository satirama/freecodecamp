import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.styl']
})
export class QuoteComponent implements OnInit {

  quote: any;

  constructor(private http: Http) { }

  headersCont = new Headers({"X-Mashape-Key": 'OepLSD6owKmsheOtYDt9uHBqBxlNp1vGO6bjsnrNuRUsPdi383',
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept": "application/json"
  });

  headerObj = {headers : new Headers(this.headersCont),
  };

  getColor(){
    var colors=["#E3D900", "#28CF98","#63E427","#F75C19",
    "#42CFE5", "#C880EA", "#FC30F0", "#FC30A9","#FC306B","#FC303F",
    "#FF6537","#FE961F","#A4F225","#40B03B","#3BB099","#B03B66"];
    var index = Math.floor(Math.random()*colors.length);
    return colors[index]
  }

  getQ(){
    document.body.style.backgroundColor = this.getColor();    
    this.http.get("https://andruxnet-random-famous-quotes.p.mashape.com/",this.headerObj).subscribe((res: Response) => this.quote = res.json());
  }

  ngOnInit() {
    this.getColor();
    this.getQ();
  }

}
