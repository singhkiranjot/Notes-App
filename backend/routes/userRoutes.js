const express = require("express")

const router = express.Router()
const zod = require("zod")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { User } = require("../db")



//  signup 

const signupBody = zod.object({
    username : zod.string().email() ,
    password : zod.string() ,
    name : zod.string()
})

router.post("/signup" , async (req,res) => {
    const { success } = signupBody.safeParse(req.body)
    if(!success) {
        return req.json({
            message : "invalid inputs"
        })
    }

    const existingUser = await User.findOne({
        username : req.body.username
    })

    if(existingUser){
        return res.json({
            message : "username already exists"
        })
    }

    const user = User.create({
        username : req.body.username,
        password : req.body.password,
        name : req.body.name
    })
    const userId = user._id

    const token = jwt.sign({
        userId
    } , JWT_SECRET)

    res.json({
        message : "user created",
        token : token,
        userId : userId
    })
})



// signin


const signinBody = zod.object({
    username : zod.string() ,
    password : zod.string()
})

router.post("/signin" , async (req,res) => {
    const {success} = signinBody.safeParse(req.body)
    if(!success) {
        return res.json({
            message : "invalid inputs"
        })
    }

    const user = await User.findOne({
        username : req.body.username,
        password : req.body.password

    })

    if(user){
        const token = jwt.sign({
            userId : user._id
        } , JWT_SECRET)

        return res.json({
            name : user.name,
            token : token
        })
    }

    res.json({
        message : "invalid Credentials"
    })

})


module.exports = router