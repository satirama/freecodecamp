import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = 'app';

  time = 0;
  play = 5;
  work = 25;
  mins = 0;
  secs = '00';

  status = 'work';

  private sub: Subscription;  

  ngOnInit(){
    this.title= 'click to begin!';
    this.mins= this.work;
  }

  counter(t){
    this.time -= t;
    while (this.time > 0){
      if (Number(this.secs) === 0) {
       this.secs = ('0' + (60 - t)).slice(-2);
       this.mins -= 1;
      }
    }
    this.sub.unsubscribe();
    this.secs = '00';
    if (this.status === 'work'){
      this.status = 'play';
      this.title = 'time to play!';
    }
    else{
      this.status = 'play';
      this.title = 'time to work!';
    }
  }

  onOff(){
    let timer = Observable.timer(0,1000);
    this.sub = timer.subscribe((t) =>{
      this.counter(t);
    });

    if (this.status === 'work'){
      this.mins = this.work;
      this.secs = '00';
      this.time = this.work * 60
    }
    else{
      this.mins = this.play;
      this.secs = '00';
      this.time = this.play * 60
    }
  }

  playMore(){
    this.play += 1;
  }

  playLess(){
    this.play -= 1;
  }

  workMore(){
    this.work += 1;
  }

  workLess(){
    this.work -= 1;
  }
}
