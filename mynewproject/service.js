let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let loginrouter = require('./src/routes/login.route');
var app = express();
let port = 3030;
let host = "127.0.0.1";

//console.log("ramu :: "+path.join(__dirname,'src/views'));

//app.use(express.static(path.join(__dirname,'src/views')));

//app.use(bodyParser.text());
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:false}));

app.use('/',loginrouter);
// Query string Method Syntax
// app.get('/home', (req,res)=>{
//    //console.log(`${req.query.username}  ${req.query.password}`) 
//     res.send(`Name :: ${req.query.username}  Password :: ${req.query.password}`);
// });
// Query Params Syntax 
app.post('/department/department/:department_name/salary/:salary_amount', (req,res)=>{
    res.status(200).json(req.params);
});

// request body method Syntax
app.post('/contact', (req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body);
});

app.post('/login', (req, res)=>{
    if (!req.body) return res.sendStatus(400)
    res.send(`welcome ::  ${ req.body.username} your age :: ${req.body.age} and salary :: ${req.body.salary}`);
  })

app.listen(port,host,()=>{
    console.log(`server running on ${host}:${port}`);
});