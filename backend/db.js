const mongoose = require ("mongoose")

mongoose.connect("mongodb+srv://kiranjot_singh:YhvP5neBV6mX5Sd9@notesdbcluster.qvngfa4.mongodb.net/app?retryWrites=true&w=majority&appName=NotesDbCluster")

const userSchema = new mongoose.Schema({
    username : String,
    password : String,
    name : String
})

const User = mongoose.model("User" , userSchema)

// const notesSchema = new mongoose.Schema({
//     userId : {
//         type : mongoose.Schema.Types.ObjectId,
//         ref : "user",
//         required : true
//     }
// })



module.exports = {
    User,
}