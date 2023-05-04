import {products} from '../models/products.js'


export const getProducts = async (req ,res) =>{
    try{
        const products1 = await products.findAll({
        });
        res.json(products1)
    }catch(error){
        return res.status(500).json({message: error.message})
    }
    
}


export const createProducts = async(req ,res) =>{
    try{
        console.log(req.body)
    const {name,description,img_url,price} = req.body
    const newProduct = await  products.create({
        name,
        description,
        img_url,
        price,
    })
    res.json(newProduct)
    }catch(error){
    return res.status(500).json({message: error.message})
    }
}


export const updateProducts = async (req,res) =>{
    try{
     const {id} = req.params
     console.log(id)
    const {name, description,img_url,price} = req.body
     const Product = await products.findByPk(id)
     Product.name = name;
     Product.description = description
     Product.img_url = img_url
     Product.price = price
    await Product.save()
    res.json(Product)
    } catch(error){
    return res.status(500).json({message: error.message})
    }
    }


    export const deleteProducts = async (req,res) =>{
        try{
           console.log(req.params.id)
           const {id} = req.params
           await products.destroy({
               where:{
                   id,
               }})
           res.sendStatus(204) 
        } catch(error){
        return res.status(500).json({message: error.message})
        }
       }
