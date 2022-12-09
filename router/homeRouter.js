const express = require('express')
const router = express.Router()
const model = require('../models/cadastroModel')

router.get('/', (err,res)=>{
    res.render('login')
})

router.get('/register', (err,res)=>{
    res.render('cadastro')
})

router.post('/cadastro',async(req,res)=>{
    try{
        const {user, password, confPassword} = req.body

        if(password === confPassword){
            const userData = new model({
                user, password
            })
            userData.save(err=>{
                if(err){
                    console.log('Error')
                }
                else{
                    console.log('User created')
                    res.render('login')
                }
            })
        }
        else{
          res.render('cadastro')  
          console.log("ERROR")
        }
    }
    
    catch(error){
        return res.send(error)
    }
})

//Sign in
router.post('/login', (req,res)=>{
    const {user, password} = req.body

    model.findOne({user:user},(err,result)=>{
        if(user === result.user && password === result.password){
            res.render('acess')
            console.log("Success")
        }
        else{
            res.render('login')
            console.log("FAIL")
        }
    })
})

module.exports = router