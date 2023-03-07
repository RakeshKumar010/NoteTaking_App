const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

require('./connection')
const modelSchema = require('./model')
const addNotesSchema = require('./notesmodel')
app.use(express.json())
app.use(cors())
app.post('/signup',async(req,res)=>{
    let result = new modelSchema(req.body)
    result = await  result.save()
    res.send(result)

    
})
app.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password){
        let result = await modelSchema.findOne(req.body)
        if(result){
            res.send(result)
        }else{
            res.send({'result':'data not found'})
        }
    }else{
        res.send({'result':'send both faild'})
    }
   
})
app.post('/Addnotes',async(req,res)=>{
    let result = new addNotesSchema(req.body)
    result = await result.save()
    res.send(result)
    
})
app.get('/',async(req,res)=>{
    let products = await addNotesSchema.find()
    if(products.length>0){
        res.send(products)
    
        }else{
            res.send({'result':"not found"})
        }
})
app.delete('/:id',async(req,res)=>{
    let result = await addNotesSchema.deleteOne({_id:req.params.id})
    res.send(result)
})
app.put('/update/:id',async(req,res)=>{
    let result = await addNotesSchema.updateOne({_id:req.params.id},{$set:req.body })
    res.send(result)
})
app.listen( 3000,()=>{
    console.log('Server is open at localhost:3000')
})