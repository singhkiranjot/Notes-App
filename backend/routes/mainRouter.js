const express = require("express")
const userRouter = require ("./userRoutes")

const router = express.Router()
router.use("/users" , userRouter)
// router.use("/notes" , notesRouter)

module.exports = router