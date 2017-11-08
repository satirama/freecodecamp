import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import * as timer from 'timer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit, OnDestroy {
  title = '';

  time = 0;
  play = 5;
  work = 25;
  mins = 0;
  secs = '00';

  working = true;
  power = false;

  private sub: Subscription;  

  timer = new timer();




  ngOnInit(){
    this.title = 'click to begin!';
    this.mins = this.work;
    this.time = this.mins * 60;

    this.timer.options({
      onstart: function(){
        console.log('yei');
      },
      onpause: function(){
        console.log('end');
      }
    })
  }

  onOff(){
    if (!this.power) {
      this.power = true;
      this.timer.start(60);
    }
    else{
      this.power = false;
      this.timer.pause();
    }
  }

  /*counter(t){
    if (this.time > 0){
      this.time -= t;
      this.secs = ('0' + (59 - t)).slice(-2);
    }
    else{
      this.sub.unsubscribe();
      console.log('apago');
    }
    this.time -= t;
    //if (Number(this.secs) === 0) {
       this.secs = ('0' + (59 - t)).slice(-2);
       this.mins -= 1;
    //}
    if (this.time === 0){
      this.sub.unsubscribe();
      this.secs = '00';
      if (this.status === 'work'){
        this.status = 'play';
        this.title = 'time to play!';
      }
      else{
        this.status = 'work';
        this.title = 'time to work!';
      }
    }
    if (this.status === 'work'){
        this.mins = this.work;
        this.secs = '00';
        this.time = this.work * 60;
      }
      else{
        this.mins = this.play;
        this.secs = '00';
        this.time = this.play * 60;
      }
    
  }

  onOff(){
    if (!this.power) {
      this.power = true;

      let timer = Observable.timer(0,1000);
      this.sub = timer.subscribe((t) =>{
        this.counter(t);
      });
    }
    else{
      this.sub.unsubscribe();
      this.power = false;
    }
  }*/

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

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
