const express = require ("express")
const cors = require ("cors")
const app = express()

const mainRouter = require("./routes/mainRouter")

app.use(express.json())

// app.use(
//     cors({
//     origin : "*"
// }))

app.use("/notes/v1" , mainRouter)



app.listen(3000)
