const produitSchema =require('../model/produit');
//ajouter un produit
exports.addProduct =async(req,res)=>{
    try{
        const {designation,image,prix,quantite}= req.body;
 
        const newProduct = await new produitSchema (req.body);
   
        newProduct.save();
        res.status(200).json({msg:'product created with sucess',newProduct})
    
    }
    catch (error){
        console.log(error);
        res.status(500).json({msg:"server error"})
    }
}
//modifier un produit

exports.updateProduct = async(req,res)=>
{

    const {id} = req.params;
    try{
const updateProduct = await produitSchema.findByIdAndUpdate(id,{$set:{...req.body}},{new:true})
res.status(200).json({msg:"product updated",updateProduct})
    }catch(error){
        res.status(500).json({msg:"server error"})
    }
}
exports.listProduct =async(req,res)=>
{
    try{
        const listProduct = await produitSchema.find({})
        res.status(200).json({msg:"list of product",listProduct})

    }
    catch(error)
    {
        console.log(error);
    }
}
exports.deleteProduct = async (req,res) =>
{

    const {id} =req.params;
    try{
        const deleteProduct = await produitSchema.findByIdAndDelete(id)
        res.status(200).json({msg:"product deleted",deleteProduct})
    }
    catch(error){
res.status(500).json({msg:"error"})
    }
}


