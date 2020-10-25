const { nextTick } = require('process');

const express = require('express')();
express.listen(3000);
express.get('/api/list',(req,res,next)=>{
    console.log(1);
    next()
    console.log(2);

    res.send(121212)
},(req,res)=>{
    console.log(33333);
})