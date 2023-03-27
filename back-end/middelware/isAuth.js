const jwt = require('jsonwebtoken');
const userSchema = require('../model/user');

exports.isAuthenticate= async(req,res,next)=>
{

    try{
        const token = req.header ('Authorization');
        console.log(token);
        const decode = jwt.verify (token,process.env.privateKey);
        console.log('decoded:',decode);
        if(!decode){
            return res.status(404).json({msg:"you are not bere"})
        }
        const user = await userSchema.findById(decode.id);
        console.log('user details:',user);
        req.user = user ;
        next();

    }
    catch (error){
        res.status(500).json({msg:"server error"})
    }
}