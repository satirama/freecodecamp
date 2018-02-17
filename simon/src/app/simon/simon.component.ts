import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';

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
    this.computerSeq = [];
    this.playerSeq = []; 
    this.computerTurn = true;

    this.game();
  }

  game(){
    var computerMove, 
    playerMove;

    computerMove = () => {
      console.log(this.computerTurn, 'player', this.playerSeq, 'comp', this.computerSeq);

      this.computerSeq.push(this.getRandom());
      for (let i = 0; i < this.computerSeq.length; i++){
        console.log('during for', this.computerTurn);
        document.getElementById(this.computerSeq[i]).click();
      }

      playerMove();
    }

    playerMove = () => {
      setTimeout( function(){ 
        if (!this.computerTurn && JSON.stringify(this.playerSeq) === JSON.stringify(this.computerSeq)){

          this.computerTurn = !this.computerTurn;
          console.log(this.computerTurn);

          if(this.computerTurn){
            computerMove()
          }
          console.log('player checked');
        }
        else {
          alert("Loser"); 
        }
      }, 5000);
    };
    return computerMove();
  }

  getRandom(){
    let choose = Math.floor(Math.random() * 4 + 1); 
    console.log('random', choose);
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
  
  this.computerSeq.push(this.getRandom());
  this.computerSeq.forEach((el)=>{
    document.getElementById('+ el +').click();
  })
  
  
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
