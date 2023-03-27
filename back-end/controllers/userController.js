const userSchema =require('../model/user');
const bcrypt = require('bcrypt');

const jwt =require ('jsonwebtoken');
exports.register =async(req,res)=>{
    try{
        const {name,email,password}= req.body;
        const exist = await userSchema.findOne({email});
        if(exist){
            return res.status(404).json({msg:"email already exist"});
    
        }
        const newUser = await new userSchema (req.body);
        // cryptage mta3 password fel body mta3 requete
        const saltRounds= 10;
        const salt =bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password,salt);
        newUser.password =hash;
        newUser.save();
        res.status(200).json({msg:'user created with sucess',newUser})
    
    }
    catch (error){
        console.log(error);
        res.status(500).json({msg:"server error"})
    }
}
//login
exports.login = async(req,res)=>
{
try{
    const {email,password}= req.body;
    const exist= await userSchema.findOne({email})
    if(!exist){
        return res.status(404).json({msg:"wrong address email or passwor "})
    }
 const match =  await bcrypt.compare(password,exist.password)
 if(!match){
    return res.status(404).json({msg:"wrong address mail or password"})
 }
 //token
 const payload = {id:exist._id};
 const token =jwt.sign(payload,process.env.privateKey);

 res.status(200).json({msg:"you did it ",exist,token})
}
catch(error){
console.log(error);
res.status(500).json({msg:"server error"})
}

}

exports.updateUser = async(req,res)=>
{

    const {id} = req.params;
    try{
const updateUser = await userSchema.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
res.status(200).json({msg:"username updated",updateUser})
    }catch(error){
        res.status(500).json({msg:"server error"})
    }
}
exports.listUser =async(req,res)=>
{
    try{
        const listUser = await userSchema.find({})
        res.status(200).json({msg:"list of user",listUser})

    }
    catch(error)
    {
        console.log(error);
    }
}
exports.deleteUser = async (req,res) =>
{

    const {id} =req.params;
    try{
        const deleteuser = await userSchema.findByIdAndDelete(id)
        res.status(200).json({msg:"user deleted",deleteuser})
    }
    catch(error){
res.status(500).json({msg:"error"})
    }
}