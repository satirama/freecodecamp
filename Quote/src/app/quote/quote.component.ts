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

  getQ(){
    this.http.get("https://andruxnet-random-famous-quotes.p.mashape.com/",this.headerObj).subscribe((res: Response) => this.quote = res.json());
  }

  ngOnInit() {
    this.getQ();
  }

}
