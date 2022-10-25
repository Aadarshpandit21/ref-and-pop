const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    bookName: String,
    authorName: String,
    year: {
        type: Number,
        unique: true,
        required: true
    },
    category: {
        type: String,
        enum: ['Comic Book or Graphic Novel.',
            'Detective and Mystery.',
            'Fantasy.',
            'Historical Fiction.',
            'Horror.',
            'Literary Fiction.']
    }
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users
