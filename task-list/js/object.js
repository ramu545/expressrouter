'use strict'

let myobject = {
    fname:"ramu",
    lname:"reddy"
}
myobject.address = "budamagunta";
//object is unorder collection of data type

// using . dot is called as (paremeter)
console.log(myobject.fname +' '+myobject['lname']);

//another method to call object we call it as  --> of ([]) 
console.log(`
${myobject['lname']} ${myobject['address']}
`);


// Array :--

// var newarray = newarray();

let myarray = ["john","will smith","ramu"]

console.log(`
            ${myarray[0]}` );

            myarray.push(); // adding element in the last
            myarray.unshift(); //remove element from the last
            myarray.pop(); // remove element from the last
            myarray.shift(); //remove element from beginning
            //myarray.splice(start,delete,element); //start position and delete position and ad element

            // Example : 
            myarray.splice(1,0,"adding new element");
            console.log(myarray
                );

                myarray.slice(); // deviding the array and it can generate new array