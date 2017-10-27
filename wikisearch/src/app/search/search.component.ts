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
  key = [];

  constructor(private WikiServiceService: WikiServiceService) {}

  search(term) {
    this.WikiServiceService.search(term)
                          .then(items => this.items = items);
    
    if (this.items){
      this.key = Object.keys(this.items.query.pages);
      for (var i = 0; i <this. key.length; i++) {
        this.pag.push(this.items.query.pages[this.key[i]]);
      }
      console.log(this.pag); 
    }
  }

}
