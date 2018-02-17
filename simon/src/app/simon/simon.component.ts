import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject, Promise } from 'q';
//import { clearInterval } from 'timers';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.styl']
})
export class SimonComponent implements OnInit {

  strict = false;
  onPlay = false;
  computerTurn = true;
  computerSeq = [];
  playerSeq = [];
  score = 0;
  text = '';

  constructor() { }
 
  ngOnInit() {
  }

  start(){
    this.score = 0;
    this.onPlay = true;
    this.playerSeq = []; 
    this.computerTurn = true;

    if (this.onPlay){
      this.score++;
      this.computerSeq.push(this.getRandom());
      this.computerMove();
    }
  }

  computerMove(){
    let i = 0;
    let inter = setInterval( () => {
      document.getElementById(this.computerSeq[i]).click();
      i++;
      if (i >= this.computerSeq.length){
        this.computerTurn = false;
        clearInterval(inter);
        console.log(this.computerTurn);
      }
    }, 700)
  }

  getRandom(){
    let choose = Math.floor(Math.random() * 4 + 1); 
    console.log('choose', choose);
    return choose;
  }

  select(id){
    var sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound'+ id +'.mp3');  sound.play();


    if (this.onPlay && !this.computerTurn){
      if (this.playerSeq.length < this.computerSeq.length){
        this.playerSeq.push(id);
        console.log('player', this.playerSeq);
      }
      if (this.playerSeq.length === this.computerSeq.length){
        if(JSON.stringify(this.playerSeq) === JSON.stringify(this.computerSeq)){
          console.log('yay');
          this.start();
        }
      }
      else{
        console.log('nay')
      }
    }
  }

  /* 
  
  elements 
  legend: start game, win or loose
  score: how long is the computerSeq
  strict button
  start/restart button

  */

  //status win or loose
  //button to restart
  //strict mode on off
  //mistake traker, if strict mode is on, then game is lost
  //if 20 followups correct win
  //sound and birghter color when square is selected or clicked
  //computerSeq var, tracks the order of the squares and resets when game is lost or win
  //random selection for the next square in the computerSeq


}
