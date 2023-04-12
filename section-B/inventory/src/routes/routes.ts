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

router.get('/inventory/products', (_: Request, res: Response) => {
    const ctr = inventoryProduct()

    res.status(200).json(ctr)
})

router.get('/inventory/products/:id', (_: Request, res: Response) => {
    const ctr = inventoryProductId()

    res.status(200).json(ctr)
})

router.put('/inventory/products', (_: Request, res: Response) => {
    const ctr = inventoryUpdate()

    res.status(200).json(ctr)
})



export default router;