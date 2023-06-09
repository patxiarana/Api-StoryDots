import { user } from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {secret,expires,rounds} from '../config/config.js'

//login

export const Signin = (req,res) =>{

let {email, password} = req.body
console.log(email, password)
let newPassword = req.body.password.toString()
user.findOne({
    where:{
        email:email
    }
}).then(user =>{
if(!user){
    res.status(400).json({msg:'usuario no encontrado'})
} else{
    
   if(bcrypt.compareSync(newPassword , user.password)){
     let token = jwt.sign({user:user}, secret, {
        expiresIn:expires
    })
    console.log('estoy aca')
    res.json({
        user:user,
        token: token
    })

   } else {
    res.status(401).json({msg:'password incorrecto'})
}

} 

}).catch(err =>{
    res.status(500).json(err);
})

}

//registro
export const signUp = (req,res) =>{
    console.log(req.body)
let newPassword = req.body.password.toString()
let password   =  bcrypt.hashSync(newPassword , Number.parseInt(rounds))
      
user.create({
    email : req.body.email,
    password : password
}).then(user =>{
    let token = jwt.sign({user:user}, secret, {
        expiresIn:expires
    })
     res.json({
        user:user,
        token:token,
     });

}).catch(err =>{
    res.status(500).json(err);
})
    
}