const { mongoose } = require("mongoose");


// Create Order Schema
const orderSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId, // Gets id of User
			
			ref: 'User', // Adds relationship between Order and User
		},
		orderItems: [
			{
				name: { type: String, required: true},
				qty: { type: Number , required: true},
				image: { type: String , required: true},
				price: { type: String, required: true},
				produit: {
					type: mongoose.Schema.Types.ObjectId, // Gets id of Product
				
					ref: 'Produit', // Adds relationship between Order and Product },
				},
			},
		],
		shippingAddress: {
			address: { type: String},
			city: { type: String},
			postalCode: { type: String },
			country: { type: String },
		},
		paymentMethod: {
			type: String,
			
		},
        
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		}
	},
	{
		timestamps: true,
	}
)


module.exports=mongoose.model('Order',orderSchema);