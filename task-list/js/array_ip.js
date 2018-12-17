"use strict"

// ip address changing in an array task completed 


let myip_array = ["192.168.2.1","192.168.2.2","192.168.2.3","192.168.2.4","192.168.2.5","192.168.2.6","192.168.2.7","192.168.2.8","192.168.2.9"];

for (let ip_index=0; ip_index < myip_array.length; ip_index++){
    console.log(myip_array[ip_index]);

    let re_ip =(myip_array[ip_index] == "192.168.2.4") ? "192.168.2.143":myip_array[ip_index];

    console.log(re_ip);
}

// conditional 
var d = new Date();
var time = d.getHours();

if (time < 12) {
  console.log('Good Morning :)');
}
if (time > 12) {
  console.log('Good Afternoon :)');
}
if (time < 6) {
  console.log('Good Evening :)');
}
if(time < 9){
  console.log('Good Knight :)');
}


// switch case
let term1array = ['jan','feb','mar','apr'];
let term2array = ['may','jun','jul','aug'];
let term3array = ['sep','oct','nov','dec'];
let months = [];

months.push(term1array,term2array,term3array);

console.log(months);

let term1 = prompt('enter a month Name');

for(let monindex = 0; monindex < months.length; monindex++){
  //console.log(months[monindex]);
  for(let segindex = 0; segindex < months[monindex][segindex].length; segindex++){
    //console.log(months[monindex][segindex]);
    if(term1 == months[monindex][segindex]){
      console.log('Month name :: '+ months[monindex][segindex]);
    }
  }
}

let rlh = prompt('Enter the case 1 or 2 or 3');
switch (rlh)
            {
               case '1':console.log('Register');
               break;
            
               case '2': console.log('Login');
               break;
            
               case '3': console.log('Home');
               break;

               default: console.log('default value');
            }