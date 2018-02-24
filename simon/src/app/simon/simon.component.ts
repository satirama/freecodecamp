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
  gameStart = true;
  computerTurn = true;
  computerSeq = [];
  playerSeq = [];
  score = 0;
  text = 'click to start';
  strictMode = false;

  constructor() { }
 
  ngOnInit() {
  }

  start(click){
    this.playerSeq = []; 
    this.computerTurn = true;
    let clicked = click;

    /**
     * Game starts when app loads
     */
    if (this.gameStart && !clicked){

      //check score
      if (this.score < 5){
        this.score++;
        this.computerSeq.push(this.getRandom());
        this.computerMove();
        document.getElementById('start-btn').innerText= 'Restart';
      }

      //finish game when player wins
      else{
        this.text = 'congratulations';
        this.gameStart = false;
        document.getElementById('start-btn').innerText= 'Start';
      }
    }

    //if game is not active and start button is clicked
    // start game with reset info
    else if(clicked){
      console.log('restart');
      this.computerSeq = [];
      this.score = 0;
      this.gameStart = true;
      this.computerSeq.push(this.getRandom());
      this.computerMove();
      this.score++;
    }
  }

  //play computer sequence
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
    }, 800)
  }

  //get a random selection of button for computer sequence
  getRandom(){
    let choose = Math.floor(Math.random() * 4 + 1); 
    console.log('choose', choose);
    return choose;
  }

  //when button is clicked
  select(id){
    var sound = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound'+ id +'.mp3');  sound.play();

    //player moves
    if (this.gameStart && !this.computerTurn){
      //keep track of the player's choices
      if (this.playerSeq.length < this.computerSeq.length){
        this.playerSeq.push(id);
        console.log('player', this.playerSeq);
      }
      
      for (var j = 0; j < this.playerSeq.length; j++){
        if (this.playerSeq[j] !== this.computerSeq[j]){
          if (this.strictMode === true){
            console.log(this.strictMode, 'loose');
            this.text = 'you loose';
          }
          else if (this.strictMode === false){
            console.log(this.strictMode, 'repeat');
            this.computerTurn = true;
            this.computerMove();
            this.playerSeq = [];
          }
        }
      }
      //check if player's sequence is correct
      if (this.playerSeq.length === this.computerSeq.length){
        if(JSON.stringify(this.playerSeq) === JSON.stringify(this.computerSeq)){
          console.log('yay');
          this.start(false);
        }
      }
    }
  }

  toggleStrict(){
    this.strictMode = !this.strictMode;
  }

}
