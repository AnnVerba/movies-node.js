
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import httpLogger from './logger/httpLoger.js';
import dotenv from 'dotenv'
dotenv.config({ path: "./.env/.env" })
import movieRouter from './routes/movie-router.js'


const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(httpLogger);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(process.env.apiPort, () => console.log(`Server running on port ${ process.env.apiPort}`))
