"use strict"
alert("Hello World");

let profile_status = true;
let users_data = [{
                    username : "ramu"
                  },
                  {
                    username : "lakshman"
                  },
                  {
                    username : "raghavareddy"
                  }
                ];

                let myarray=[];
while(profile_status){

    let user_prefer = prompt("register / login");

    let user_register_data = {};
    
    if(user_prefer == "register"){
        let username = prompt('Enter your Name');
        let email = prompt('Enter your Email Id');
        let pass = prompt("Enter Your Password");

        user_register_data.username = username;
        user_register_data.email = email;
        user_register_data.password = pass;

        console.log(`user Name ::: ${user_register_data['username']}
                     Email Id  ::: ${user_register_data['email']}
                     password  ::: ${user_register_data['password']}
                    `);
        // for(){

        // } 
        myarray.push(user_register_data);
        console.log(myarray);

    }
    else {
        profile_status = false;
        if(user_prefer == "login"){
            alert('Home Page');
        }
        else{
            alert('Login Faild');
        }
        console.log("Home Page");
        //window.location="../sample.html";
    }
    
}
