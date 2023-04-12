import { Router, Request, Response } from 'express'
import orderCreate from '../ctr/orderCreate';
import orderAll from '../ctr/orderAll';
import orderId from '../ctr/orderId';

const router = Router();

router.post('/order', async (req: Request, res: Response) => {
    const ctr = await orderCreate(req)
    res.status(ctr.status).json(ctr)
})

router.get('/order', async (_: Request, res: Response) => {
    const ctr = await orderAll()
    res.status(ctr.status).json(ctr)
})

router.get('/order/:id', async (req: Request, res: Response) => {
    const ctr = await orderId(req.params)
    res.status(ctr.status).json(ctr)
})


export default router;