// =============== IMPORTING LIBRARIES ================= //
const express = require('express')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const cors = require('cors')
const rateLimit = require('express')

const dbConnect = require('./config/mongodb.config')

// =============== IMPORTING ROUTERS ================= //
const userRouter = require('./routers/user.router')
const agentRouter = require('./routers/agent.router')
const adminRouter = require('./routers/admin.router')


const app = express()
const PORT = process.env.PORT || 2200
// === DATABASE CONNECTION === //
dbConnect()

// ============== CONFIGURATIONS ============== //
app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:5173', 'https://safernet-gamma.vercel.app', 'https://llegal.vercel.app', https://thebanka.vercel.app]
}))
app.use(rateLimit({
    max: 300,
    windowMs: 60 * 60 * 1000,
    message: "Please try again later!",
}))

// ======================= ENDPOINTS REGISTRATION ======================== //
app.use('/user', userRouter)
app.use('/agent', agentRouter)
app.use('/admin', adminRouter)

app.listen(PORT, () => {
    console.log(`SERVER LISTENING ON http://loacalhost:${PORT}`)
})
