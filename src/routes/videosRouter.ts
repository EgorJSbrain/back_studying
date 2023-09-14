import { Router, Request, Response } from "express";
import { VideoService } from "../services/videoService";
import { CodeResponseEnum } from "../globalConstant";

export const videosRouter = Router({})

videosRouter.get('/', async (req: Request, res: Response) => {
  const videos = await VideoService.getVideos()

  if (!videos) {
    res.sendStatus(CodeResponseEnum.BAD_REQUEST_400)

    return
  }

  res.status(CodeResponseEnum.OK_200).send(videos)
})

videosRouter.get('/:id', async (req: Request, res: Response) => {
  const video = await VideoService.getVideoById(req.params.id)

  if (!video) {
    res.sendStatus(CodeResponseEnum.BAD_REQUEST_400)

    return
  }

  res.status(CodeResponseEnum.OK_200).send(video)
})

videosRouter.post('/', async (req: Request, res: Response) => {
  const title = req.body.title

  if (!title) {
    res.sendStatus(CodeResponseEnum.BAD_REQUEST_400)

    return
  }

  const video = await VideoService.createVideo({ title })

  if (!video) {
    return res.sendStatus(CodeResponseEnum.BAD_REQUEST_400)
  }

  res.status(CodeResponseEnum.OK_200).send(video)
})

videosRouter.put('/', (req: Request, res: Response) => {

})

videosRouter.delete('/:id', (req: Request, res: Response) => {

})

videosRouter.delete('/', (req: Request, res: Response) => {

})