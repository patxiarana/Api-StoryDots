import  {Router} from 'express';
import { /*getProducts,*/ createProducts,updateProducts,deleteProducts } from '../controllers/product.controllers.js';
import { Signin,signUp } from '../controllers/Auth.controllers.js';
import express from "express"
import {products} from '../models/products.js'
//cors config
import cors from "cors"
// cors module
const app = express()

const router = Router()

//router.get('/products/', getProducts)

router.get('/', async (req, res) => {  try{
    const products1 = await products.findAll({
    });
    res.json(products1)
}catch(error){
    return res.status(500).json({message: error.message})
}
})









router.post('/products/',createProducts)
router.put('/products/:id',updateProducts)
router.delete('/products/:id',deleteProducts)











//users routes
router.post('/user/signUp', signUp)
router.post('/user/Signin', Signin)



export default router;