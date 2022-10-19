const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    //logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})
router.get('/movies',(req,res)=>{
  const arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
  res.send(arr);
})
// 2. Create an API GET /movies/:indexNumber 
// (For example GET /movies/1 is a valid request and it should return the movie in
//  your array at index 1). You can define an array of movies again in your api
router.get('/movies/:indexNumber',(req,res)=>{
    const arr = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins'];
     let indexNumber = parseInt(req.query);
     res.send(arr[indexNumber]);



     res.send("no response");
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

module.exports = router;