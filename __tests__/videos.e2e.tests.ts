import request from 'supertest'
import dotenv from 'dotenv'
import { testDbConnection, testDbDisconnect, testDbClear } from '../src/db/db'
import { app } from '../src/app'
import { CodeResponseEnum } from '../src/globalConstant'
import { before } from 'node:test'
dotenv.config()

describe('/', () => {
  beforeAll(async () => {
    await testDbConnection()
  })

  afterEach(async () => {
    await testDbClear()
  })

  afterAll(async () => {
    await testDbDisconnect()
  })

 it('+ GET - all videos staus 200', async () => {
    await request(app).get('/hometask_01/api/testing').expect(CodeResponseEnum.OK_200, [])
 })

 it('- GET by id with incorrect id', async () => {
    await request(app).get('/hometask_01/api/testing/someId').expect(CodeResponseEnum.BAD_REQUEST_400)
 })

 it('+ POST create video', async () => {
    const response = await request(app)
      .post('/hometask_01/api/testing')
      .send({ title: 'new video' })
      .expect(CodeResponseEnum.OK_200)

      expect(response.body.title).toBe('new video');
 })

 it('- POST with empty data', async () => {
    await request(app).post('/hometask_01/api/testing').expect(CodeResponseEnum.BAD_REQUEST_400)
 })

})