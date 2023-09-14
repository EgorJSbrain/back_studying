import dotenv from 'dotenv'

import { videosRouter } from './routes/index';
import { dbConnection } from './db/db';
import { app } from './app';

dotenv.config()

const PORT = process.env.PORT || 5000;
  
app.listen(PORT, async () => {
    await dbConnection()
    console.log(`SERVER START PORT-${process.env.PORT}`)
  }
)
