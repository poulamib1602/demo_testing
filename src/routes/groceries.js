const {Router} = require('express');

const router = Router();

const groList = [
    {
        item:"milk",
        price:23
    },
    {
        item:"daals",
        price:123
    },
    {
        item:"rice",
        price:576
    },
    {
        item:"oats",
        price:176
    },
    
    
]

router.get('/',(req,res)=>{
    res.send(groList)
});

router.get('/:item',(req,res)=>{
    const {item} = req.params;
    console.log(item)
    const groItem = groList.find((g)=> g.item === item);
    res.send(groItem)
});

router.post('/',(req,res)=>{
    console.log(req.body);
    groList.push(req.body);
    res.send(201);
});
module.exports=router;