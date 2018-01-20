import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.styl']
})
export class SimonComponent implements OnInit {

  strict = false;
  onPlay = false;
  computerTurn = true;
  sequence = [];
  playerSeq = [];
  score = 0;
  text = '';

  constructor() { }
 
  ngOnInit() {
    this.sequence.push(this.getRandom());
    this.sequence.push(this.getRandom());
    this.sequence.push(this.getRandom());
    this.score = this.sequence.length;
    console.log(this.sequence);
    document.getElementById('1').click();
  }

  start(){
    this.score = 0;
    this.onPlay = true;
    this.sequence = [];
    this.playerSeq = [];    
  }

  getRandom(){
    let choose = Math.floor(Math.random() * 4 + 1); 
    console.log(choose);
    return choose;
  }

  select(id){
    var sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound'+ id +'.mp3');  sound.play();
    if (!this.computerTurn && this.onPlay){
      this.playerSeq.push(id);
      console.log('player chose', id);
    }
  }

  /* 
  
  this.sequence.push(this.getRandom());
  this.sequence.forEach((el)=>{
    document.getElementById('+ el +').click();
  })
  
  
  elements 
  legend: start game, win or loose
  score: how long is the sequence
  strict button
  start/restart button

  */

  //status win or loose
  //button to restart
  //strict mode on off
  //mistake traker, if strict mode is on, then game is lost
  //if 20 followups correct win
  //sound and birghter color when square is selected or clicked
  //sequence var, tracks the order of the squares and resets when game is lost or win
  //random selection for the next square in the sequence


}
