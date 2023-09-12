import express, { Request, Response } from 'express'
  
const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    const hell = 'HELLO'
    res.send(hell)
})
  
app.listen(PORT, () => {
    console.log('-01123-')
}
)
