const express = require("express")
const { authMiddlewere } = require("../middlewere")
const { Note } = require("../db")

const router = express.Router() 

// add note 

router.post("/add-note" , authMiddlewere , async(req,res)=>{
    const {title , content} = req.body
    var userId  = req.userId

    if(!content){
        res.json({
            messege : "content feild cannot be empty"
        })
    }
    try{
        const note =await Note.create({
            userId,
            title,
            content
        })

        return res.json({
            message : "note added"
        })
    }catch(err){
        res.json({
            message : "error while adding note",
            error : err
        })
    }


})


// update note

router.put("/edit-note" , authMiddlewere , async(req,res)=>{
    const {title , content } = req.body
    const noteId = req.query.noteId

    if(!title && !content){
        return res.json({
            messege : "no change provided"
        })
    }
   

    await Note.updateOne({_id : noteId},{
        $set:{
            title,
            content,
        }
    })
    return res.json({
        messege : "updated"
    })
})

// delete note

router.delete("/delete-note" , authMiddlewere , async(req,res)=>{
    const noteId = req.query.noteId

    
    await Note.deleteOne({_id : noteId})

    return res.json({
        messege : "deletion done"
    })
})

// get all notes

router.get("/get-all-notes" , authMiddlewere , async(req,res)=>{
    const userId = req.userId
    
    const notes = await Note.find({userId,})

    return res.json({
        notes
    })
})

module.exports = router