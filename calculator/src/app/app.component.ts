import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  calculator = '0';
  sign = '';
  sign2= '';
  originalSign = true;

  ngOnInit(){
    this.calculator = '0';
    this.sign = '';
    this.originalSign = true;
  }

  ac(){
    this.calculator = '0';
    this.originalSign = true;
    this.sign = '';
    this.sign2 = '';
  }

  invertSign(){
    if (this.calculator !== '0' &&this.originalSign){
      this.originalSign = false;
      this.sign = '-(';
      this.sign2 = ')';
    }
    else{
      this.originalSign = true;
      this.sign = '';
      this.sign2 = '';
    }
  }

  solve(){
    if (this.originalSign){
      this.calculator = eval(this.calculator).toString().slice(0,15);
    }
    else{
      this.calculator = eval(this.sign + this.calculator + this.sign2).toString().slice(0,15);
      this.sign = '';
      this.sign2 = '';
      this.originalSign = true;
    }
    
  }

  input(value){
    if (this.calculator === '0') {
      this.calculator = value;
    }
    else if (this.calculator.length < 16){
      if (!Number.isNaN(Number(value))){
        this.calculator = this.calculator + value;
        console.log('normal')
      }
      else if(Number.isNaN(Number(value)) && !Number.isNaN(Number(this.calculator.charAt(this.calculator.length - 1)))){
        this.calculator = this.calculator + value;
      }
      else if((this.calculator.charAt(this.calculator.length - 1) !== '-' && value === '-')){
        this.calculator = this.calculator + value;
      }
      else if((this.calculator.charAt(this.calculator.length - 1) !== '.' && value === '.')){
        this.calculator = this.calculator + value;
      }
    }
    console.log(this.calculator, 'end');
  }
}
