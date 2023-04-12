import express, { Request, Response } from 'express';
import router from './routes/routes'
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', router)
app.use('/*', (req: Request, res: Response) => {
  console.log(req.url)
  res.status(404).json({
    error: 'Not Found'
  });
})
const port = 3000
app.listen(port, () => console.log('server started on port: ' + port));