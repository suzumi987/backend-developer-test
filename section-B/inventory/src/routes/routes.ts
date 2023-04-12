import { Router, Request, Response } from 'express'
import getProduct from '../ctr/inventoryImport';
import multer from 'multer'
import inventoryImport from '../ctr/inventoryImport';
import inventoryProduct from '../ctr/inventoryProduct';
import inventoryProductId from '../ctr/inventoryProductId';
import inventoryUpdate from '../ctr/inventoryUpdate';

const upload = multer({ dest: 'uploads/' });

const router = Router();

router.post('/inventory/import', upload.single('file'), (_: Request, res: Response) => {
    const ctr = inventoryImport()

    res.status(200).json(ctr)
})

router.get('/inventory/products', async (_: Request, res: Response) => {
    const ctr = await inventoryProduct()

    res.status(ctr.status).json(ctr)
})

router.get('/inventory/products/:id', async (req: Request, res: Response) => {
    const ctr = await inventoryProductId(req.params.id)

    res.status(ctr.status).json(ctr)
})

router.put('/inventory/products', async (req: Request, res: Response) => {
    const ctr = await inventoryUpdate(req.body)

    res.status(ctr.status).json(ctr)
})



export default router;