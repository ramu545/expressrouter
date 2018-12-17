// "use strict"
let accounts = [
    {
    accountId:"100",
    name :"ramu",
    balance:5000,
    age:28,
    address:"Nellore"},
    {
        accountId:"101",
        name :"lakshman",
        balance:10000,
        age:28,
        address:"Nellore"},
        {
            accountId:"102",
            name :"raghavareddy",
            balance:50000,
            age:45,
            address:"kavali"}
];


function findaccount(){

}


function bank(){
    let account_id = prompt('Enter your Account number');
    let noacc = false;
    for(account of accounts){
        console.log("Show Account :: ",account);
        if(account.accountId == account_id){
            alert(`Welcome ${account.name}
                    Balence ${account.balance}
                    `);
            noacc = true;
        }
    }
    if(!noacc){
        alert('Account Not Avilable');
    }
}
bank();


function deposit(dAmount){
    if(dAmount > 0){

    }
}
deposit();