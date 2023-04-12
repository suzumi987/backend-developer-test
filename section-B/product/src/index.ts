import express, { Request, Response } from 'express';
import router from './routes/routes'
import { task } from './utils/cronjob.utils'
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
task.start()

app.use('/', router)
app.use('/*', (req: Request, res: Response) => {
  console.log(req.url)
  res.status(404).json({
    error: 'Not Found'
  });
})
const port = 3000
app.listen(port, () => console.log('server started on port: ' + port));