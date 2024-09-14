import express from 'express'

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN
}))

// Configuration / middleware
//We have to setup app configuration - to receive request in differentx2 format
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
// Configuration for storing file temporary on server
app.use(express.static("public"))

app.use(cookiesParser())



export {app};