import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import { videosRouter } from './routes'

export const app = express()
app.use(bodyParser.json())

app.use('/', videosRouter)
// app.use('/hometask_01/api/testing', videosRouter)
