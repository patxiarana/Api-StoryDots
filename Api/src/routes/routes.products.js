import  {Router} from 'express';
import { getProducts, createProducts,updateProducts,deleteProducts } from '../controllers/product.controllers.js';
import { Signin,signUp } from '../controllers/Auth.controllers.js';
import express from "express"
//cors config
import cors from "cors"
// cors module
const app = express()

const router = Router()

router.get('/products/', getProducts)
router.post('/products/',createProducts)
router.put('/products/:id',updateProducts)
router.delete('/products/:id',deleteProducts)



//users routes
router.post('/user/signUp', signUp)
router.post('/user/Signin', Signin)



export default router;