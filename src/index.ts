import express, { Request, Response } from 'express'
import dotenv from 'dotenv'

import { videosRouter } from './routes/index';

dotenv.config()
  
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/hometask_01/api/testing', videosRouter)
  
app.listen(PORT, () => {
    console.log(`SERVER START PORT-${process.env.PORT}`)
  }
)
