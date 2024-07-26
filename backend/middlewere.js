const jwt = require("jsonwebtoken")

const { JWT_SECRET } = require("./config")

const authMiddlewere = (req , res , next) => {
    const authHeaders = req.headers.authorization
    if(!authHeaders || !authHeaders.startsWith("Bearer")){
        return res.json({
            message : "invalid Authorization"
        })
    }
    
    const token = authHeaders.split(' ')[1]
    try{
        const decoded = jwt.verify(token,JWT_SECRET)

        req.userId = decoded.userId
        
        next()
        
    }
    catch(err){
        res.json({
            message : "in catch",
            error : err
        })
    }
}

module.exports = {
    authMiddlewere,
}