
const Order =require('../model/order');
exports.addOrderItems =async(req,res)=>{

	const {
		orderItems,
		shippingAddress,
		paymentMethod,
		totalPrice,
	} = req.body

	// Check if there are order items
	if (orderItems && orderItems.length === 0) {

		res.status(400)
		throw new Error('No order items')
		return
	}
     else
      {
		const order = new Order({
			orderItems,
			user: req.user._id,
			shippingAddress,
			paymentMethod,
			totalPrice,
		})
		// Save new order to the database
		const createdOrder = await order.save()
		res.status(201).json(createdOrder)
	}
}
//Get order by id
exports.getOrderById =async(req,res)=>{
	const order = await Order.findById(req.params.id).populate(
		'user',
		'name email'
	)

	if (order) {
		res.json(order)
	} else {
		res.status(404)
		throw new Error('Order not found')
	}
}
// Update order to paid
// exports.updatedOrder  =async(req,res)=>{
// 	const order = await Order.findById(req.params.id)

// 	if (order) {
// 		order.isPaid = true
// 		order.paidAt = Date.now()
// 		order.paymentResult = {
// 			id: req.body.id,
// 			status: req.body.status,
// 			update_time: req.body.update_time,
// 			email_address: req.body.payer.email_address,
// 		}

// 		const updatedOrder = await order.save()
// 		res.json(updatedOrder)
// 	} else {
// 		res.status(404)
// 		throw new Error('Order not found')
// 	}
// }
exports.getMyOrders =async(req,res)=>{
    const orders = await Order.find({ user: req.user._id })
	res.json(orders)

	
}
exports.getOrders = async (req, res) => {
	const orders = await Order.find({}).populate('user', 'id name')
	res.json(orders)
}


exports.updateOrderToPaid = async (req, res) => {
	const order = await Order.findById(req.params.id)

	if (order) {
		order.isPaid = true
		order.paidAt = Date.now()
	

		const updatedOrder = await order.save()
		res.json(updatedOrder)
	} else {
		res.status(404)
		throw new Error('Order not found')
	}
}

