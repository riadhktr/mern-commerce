const { mongoose } = require("mongoose");
const produitSchema = new mongoose.Schema({

    designation:{
       type: String,
       require: true,
    },
    image:{
        type:String,
        require:true,
    },
   
    prix:{
        type:Number,
        require: true,
        default:0,
     },
    quantite:{
    type:Number,
    require: true,
    default:0,
     }
    
    })
    module.exports=mongoose.model('Produit',produitSchema);