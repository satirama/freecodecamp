import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
import * as timer from 'timer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  title = '';

  time: number;
  play = 5;
  work = 25;
  mins = 0;
  secs = '00';
  count = 0;

  working: boolean;
  power: boolean;
  timer: any;


  ngOnInit(){
    this.title = 'click to begin!';
    this.time = this.work * 60;
    this.mins = this.work;
    this.working = true;
    this.power = false;

    this.timer = new timer({
      onstart: function(){
        console.log('inicia')
      },
      onpause: function(){
        console.log('pause');
      },
      ontick: () =>{
        this.time -= 1;
        if (this.count % 60 === 0) {
          this.secs = '00';
          this.mins -= 1;
        }
        this.count += 1        
        this.secs = ('0' +  (60 - (this.count % 60))).slice(-2);        
        
      },
      onend: () => {
        this.power = false;
        if (this.working){
          this.mins = this.play;
          this.secs = '00';
          document.getElementById('container').style.backgroundColor = "#FF2929";
        }
        else{
          this.mins = this.work;
          this.secs = '00';
          document.getElementById('container').style.backgroundColor = "#71D100";
        }
        this.working = !this.working;
        alert('Time\'s up!');
      }
    })
  }

  onOff(){
    //identify if timer was running or not 
    if (!this.power) { 
      this.power = true;
      //identify whether is new timer or if it has already started
      if (this.time > 0 && this.time <= this.work * 60){
        this.timer.start(this.time);
      }
      else if (this.time > 0 && this.time <= this.play * 60){
        this.timer.start(this.time);
      }
      else if (this.time >= 0 && this.working){
        this.time = this.work * 60;
        this.timer.start(this.time);
      }
      else if (this.time >= 0 && !this.working){
        this.time = this.play * 60;
        this.timer.start(this.time);
      }
    }
    else{
      this.power = false;
      this.timer.pause();
    }
  }

  playOn(){
    this.working = false;
    this.mins = this.play;
    this.secs = '00';
    this.time = this.play * 60;
    this.power = false;
    document.getElementById('container').style.backgroundColor = "#A1E806";
  }

  workOn(){
    this.working = true;
    this.mins = this.work;
    this.secs = '00';
    this.time = this.work * 60;
    this.power = false;
    document.getElementById('container').style.backgroundColor = "#FF2929";
  }

  playMore(){
    if(this.play < 240){
      this.play += 1;
    }
    else{
      alert('You have reached the limit.');
    }

    if(!this.working){
      this.mins = this.play;
      this.time = this.play * 60;
      this.secs = '00';
      this.count = 0;      
    }
  }

  playLess(){
    if (this.play > 0){
      this.play -= 1;
    }    
    if(!this.working){
      this.mins = this.play;
      this.time = this.play * 60;
      this.secs = '00';
      this.count = 0;      
    }
  }

  workMore(){
    if(this.work < 240){
      this.work += 1;
    }
    else {
      alert('You have reached the limit.');
    }
    
    if(this.working){
      this.mins = this.work;
      this.time = this.work * 60;
      this.secs = '00';
      this.count = 0;      
    }
  }

  workLess(){
    if (this.work > 1){
      this.work -= 1;
    }
    if(this.working){
      this.mins = this.work;
      this.time = this.work * 60;
      this.secs = '00';
      this.count = 0;
    }
  }
}
