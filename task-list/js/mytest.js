let accounts = [{accountid:"100",name:"ramu",balance:5000,age:28,address:"kavali"},
               {accountid:"101",name:"vamsi",balance:8000,age:27,address:"kavali"},
               {accountid:"102",name:"ashok",balance:20000000,age:24,address:"kavali"}];
let banking;

let banking_options = prompt("select your option 1) balance enquire 2) Deposit Amount 3) Withdraw Amount 4) Exit ");
   
   switch(banking_options) {
    case "1": showbalance();
      break;
    case "2": deposit();
      break;
    case "3": withdraw_amount();
      break;
    case "4": exit();
      break;  
    default: console.log("Option not Required");
  }

function findaccountid(account_id){
    let noAcc = false;
    for(account of accounts){
        if(account_id == account.accountid){
            console.log(`You Account Number :: ${account.accountid} Name :: ${account.name}`);   
            return account;
        }
    }
    if(!noAcc){
        alert('Account not Found');
        return null;
    }
}

function showbalance(){
    let account_id = prompt("Enter Your Account number");
    let data = findaccountid(account_id);
    if(data){
        console.log(`hello Mr ${data.name} Your account Balance :: ${data.balance}`);
    }
}

function deposit(){
    let aCcountid= prompt('Enter your Account Number');
    let data = findaccountid(aCcountid);
    console.log('Your Account Id :::  '+data.accountid+'  Your Old Balance ::: '+data.balance);
    let dep_amount = prompt('Deposit Your Amount');
    if(dep_amount){
        data.balance+=Number(dep_amount);
        console.log(` Your Account New Balance is ::: ${data.balance}`);
    }
    else{
        alert('invalid Amount for Deposit');
    }
    
}

function withdraw_amount(){
    let acountid= prompt('Enter your Account Number');
    let data = findaccountid(acountid);
    console.log('Your Account Id :::  '+data.accountid+'  Your Old Balance ::: '+data.balance);
    let wit_amount = prompt('WithDraw Your Amount');
    console.log('Old Balance :: ',data.balance);
    data.balance-=Number(wit_amount);
    if(data.balance == 1000 || data.balance > 1000){
        console.log('Your Account Id :::  '+data.accountid+'  You Withdraw Amount is ::: '+wit_amount+'  AvilableBalance Amount ::: '+data.balance);
    }
    else{
        alert("Invalid Amount"); 
    }
}

function exit(){
    //break;
    // exit;
    console.log('Exit from the Account');
    return false;
}