import dotenv from 'dotenv'

import { videosRouter } from './routes/index';
import { dbConnection } from './db/db';
// import { app } from './app';
import express, { Request, Response } from 'express'


dotenv.config()

const PORT = process.env.PORT || 5000;

export const app = express()
// app.use(bodyParser.json())

app.use('/videos', videosRouter)
  
app.listen(PORT, async() => {
    await dbConnection()
    console.log(`SERVER START PORT-${process.env.PORT}`)
  }
)
