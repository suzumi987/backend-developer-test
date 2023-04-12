import { Router, Request, Response } from 'express'
import getPridictAll from '../ctr/productAll.ctr';
import getProductId from '../ctr/productId.ctr';

const router = Router();

router.get('/product/:id', async (req: Request, res: Response) => {
    const ctr = await getProductId(req.params.id)
    res.status(ctr.status).json(ctr)
})


router.get('/product', async (_: Request, res: Response) => {
    const ctr = await getPridictAll()
    res.status(ctr.status).json(ctr)
})



export default router;