import dotenv from 'dotenv'

import { videosRouter } from './routes/index';
import { dbConnection } from './db/db';
// import { app } from './app';
import express, { Request, Response } from 'express'


dotenv.config()

const PORT = process.env.PORT || 5000;

// app.use(bodyParser.json())

// app.use('/videos', videosRouter)

export const app = express()

app.get('/videos', (req: any, res: any) => {
  res.send('HELLO')
})
  
app.listen(PORT, async() => {
    await dbConnection()
    console.log(`SERVER START PORT-${process.env.PORT}`)
  }
)
