import express, {Request, Response}from "express";
import routes from'./routes' 

const app = express()
const PORT = 3001

app.use(express.json())

app.use('/api', routes)

app.listen(PORT,()=>{
    console.log(`Rodando em http://localhost:${PORT}`)
})