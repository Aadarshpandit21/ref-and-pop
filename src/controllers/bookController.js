const { count } = require("console")
const BookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel.js")
const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find()
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}
const getAuthorssData= async function (req, res) {
    let allBooks= await authorModel.find({ author_name : "Chetan Bhagat" } )
    console.log(allBooks)
     res.send({msg: allBooks, condition: true})
    
}


const updateBooks= async function (req, res) {
   // {sales: "1200"}
    let allBooks= await BookModel.findOneAndUpdate( 
        {name:"Two states"} , //condition
        { $set:{
            price:100
        }}, //update in data
        { new: true , upsert: true},
     )
    // let allBooks= await BookModel.findOneAndUpdate( 
    //     { authorName: "ABC"} , //condition
    //     { $set: data }, //update in data
    //     { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
    //  )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
module.exports.createAuthor= createAuthor
module.exports.getAuthorssData=getAuthorssData 