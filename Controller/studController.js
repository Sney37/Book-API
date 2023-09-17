const Stud = require('../Model/Stud')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getStud = async (req,res)=>{
    try {
        const data = await Stud.find()
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.register = async (req,res)=>{
    try {
        const studExists = await Stud.findOne({email:req.body.email})
        if(studExists) return res.status(400).json({errors:true,message:'student exists...'})

        const salt = await bcrypt.genSalt();
        req.body.password = await bcrypt.hash(req.body.password,salt)

        const data = await Stud.create(req.body)
        return res.json({errors:false,data:data})
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

exports.login = async (req,res)=>{
    try {
        const studExists = await Stud.findOne({email:req.body.email})
        if(!studExists) return res.status(400).json({errors:true,message:'email or password invalid...'})

        const passwordVerify = await bcrypt.compare(req.body.password,studExists.password)

        if(!passwordVerify) return res.status(400).json({errors:true,message:'email or password invalid...'})

        const token = await jwt.sign({id:studExists._id},process.env.SEC)
        return res.json({errors:false,data:{token:token,user:studExists}})
    } catch (error) {
        return res.status(400).json({errors:true,error:error.message})
    }
}