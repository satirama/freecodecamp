import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ArticleComponent } from './article/article.component';

import { WikiServiceService } from './wiki-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    WikiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
