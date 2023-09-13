import { Router, Request, Response } from "express";

export const videosRouter = Router({})

videosRouter.get('/', (req: Request, res: Response) => {
  res.send('HEllo')
})

videosRouter.get('/:id', (req: Request, res: Response) => {
  res.send(req.params.id)
})

videosRouter.post('/', (req: Request, res: Response) => {

})

videosRouter.put('/', (req: Request, res: Response) => {

})

videosRouter.delete('/:id', (req: Request, res: Response) => {

})

videosRouter.delete('/', (req: Request, res: Response) => {

})