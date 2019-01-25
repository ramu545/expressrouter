const router = require('express').Router();
var path = require('path');

router
.route('/login')
.get((req,res,next)=>{
   // console.log('login router :: '+path.join(__dirname,'.././views/index.html'));
    res.sendFile(path.join(__dirname,'.././views/index.html'));
});
module.exports=router;