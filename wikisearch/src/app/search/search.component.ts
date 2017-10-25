import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, Jsonp } from '@angular/http';
import { WikiServiceService } from '../wiki-service.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.styl']
})
export class SearchComponent {

  items: any;
  pag = [];

  constructor(private WikiServiceService: WikiServiceService) {}
  
  search(term) {
    this.WikiServiceService.search(term)
                          .then(items => this.items = items);
    
    if (this.items){
      this.pag = Object.keys(this.items.query.pages); 
    }
  }

/*  
  data: any;

  constructor(private http: Http) {
   }

  ngOnInit() {
  }

  onEnter(text){
    console.log(text);
    Petition still doesn't work because of headers
    
    let headers = new Headers ();
    headers.append('Api-User-Agent', 'Example/1.0');
    let options = new RequestOptions({headers: headers});

    this.http.get('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts%7Cinfo&continue=&generator=allpages&exsentences=2&exlimit=5&exintro=1&explaintext=1&inprop=url&gapfrom='
    + text +'&gaplimit=3', options).subscribe((res: Response)=> this.data = res.json());
    console.log(this.data);
  }*/

}
