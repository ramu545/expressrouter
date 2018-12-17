"use strict";

console.log('hello world');
let balence = 1000;
let total;

var deposit_amount;
var withdraw;

function deposit_money(){
    deposit_amount = +prompt('deposit your amount ::: ');
    //alert(deposit_amount);

    if(100000 < deposit_amount){
        console.log('deposit range is 100000 only');
        total = balence;
    }   
    else{
        total = balence+deposit_amount;
        console.log("you deposited amount is ::: "+deposit_amount+'    Total :: '+total);
    }
}

function withdraw_money(){
    withdraw = +prompt('withdraw your amount ::: ');

    if(withdraw > balence){
        console.log('you have minimal balence only ..!');
    }
    else{
        total = total-withdraw;
        console.log("you withdraw amount is ::: "+withdraw+'   Total :: '+total);
    }

}

function total_balance(){
    console.log(total);
}


let count = 0;

// while(count < 10){
//     console.log(count);
// 	count = count++;
// }

let num =prompt('enter your number');
// odd number or even number 

if ( num % 2 == 0) {
    console.log(num+ ' is a Even number');
}else{
    console.log(num + ' is a Odd number');
}

// fibonnace 

var a = 1, b = 0, temp;
  
while (num >= 0){
  temp = a;
  a = a + b;
  b = temp;
  num--;
}
console.log(b);
//return b;

// function fibonacci(num){
   
//   }

  // recursive 

//   function recursive(num) {
//     if (num <= 1) return 1;
  
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }

