const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

let players = [
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
        "swimming"
        ]
        },
        {
            "name": "aadarsh",
            "dob": "21/07/2000",
            "gender": "male",
            "city": "chhindwara",
            "sports": [
            "Chess"
            ]
            }
          ,
          {
            "name": "Akshay",
            "dob": "6/07/1998",
            "gender": "male",
            "city": "nagpur",
            "sports": [
            "Boxing"
            ]
            }
              ,{
                "name": "bobby",
                "dob": "4/12/1997",
                "gender": "male",
                "city": "indore",
                "sports": [
                "drawing"
                ]
                }                
]

router.post('/test-me', function (req, res){
    let obj={};
  let element= req.body.obj;
  flag=1;
for(let i=0;i<players.length;i++){
    if(players[i].name===element.name){
        flag=0;
        break;
    }
}
if(flag==1){
    players.push(element);
}
//console.log(players); 
 //players.push(element);
res.send(players)
})


router.get('/test-me2', function (req, res){
    let arr = [1,2,3,4,6,7]
    let missing=0;
    for(let i=0;i<arr.length;i++){
      if((arr[i+1]-arr[i])!=1){
           missing=arr[i]+1;
           break;
      }
    }
    res.send(`array = ${arr}and missing = ${missing}`);
})
module.exports = router;