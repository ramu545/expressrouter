// alert('welcome to you');
let pstatus = true;
let array = [];
price = [{ name : "apple",
           cost : 20
        },
        {
            name : "mango",
            cost : 30
        }
        ];
while(pstatus){
    let start = prompt("start purchase with yes / no ");
    if(start == "yes"){
        let frutename = prompt("Enter a froot Name :: ");

        let froutcount = prompt("Eterumber of froot Number :: ");

        let frute = {};
        let total;

        frute.frutename = frutename;
        frute.froutcount = froutcount;
        array.push(frute);
        
        for(let i=0; i< price.length; i++){
            //total = ();
            console.log(price.name);
        }
        
        console.log(frute);
    }
    else{
        pstatus = false;
    }
}



// task replace :: --
 
// array ip addresses
// switch case 1 for login 2 for register 3 for home
// month 
// day say good morning afternoon and goodevening


// in for loop by using in we will get index 

// example : for (user in userr){}

// by using of in for loop we will get value directly

// Example ::  for (user of users){}


// in of operater can itterates only arry's only not for object