// independent block of event in js the main building block is called function
function functionname (fname,lname){
    alert('hello World');
    console.log('Hello Mr :: '+fname+' '+lname);
}
functionname('ramu','reddy');

function sayHi(name,age,gender,address){
    var user = {};

    user.name = name;
    user.age = age;
    user.gender = gender;
    user.address = address;
    console.log("Hello Mr :: ",user);
}
sayHi("ramu",28,"M","Nellore");


// function expression and function declaration


// 1) function declaration
function showmessage(){
    alert('hello javascript');
    return "hi"; // in this function can show ret
    urn value 
}
showmessage();

// 2) function expression
  // i) labled function
let showdata = function data(){
    alert('hi data');
    return "hi"; // in this function can return function body becouse function can store in a variable
}

showdata();

// anonymous function
let showresult = function(){
    alert('welcome Show Result');
    return "hi"; // in this function can return function body becouse function can store in a variable
}

showresult();

