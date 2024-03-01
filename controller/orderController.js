import Order from "../model/Order.js";
import Product from "../model/Product.js";
import Hub from "../model/Hub.js";
import User from '../model/User.js'

export default class orderController {

    // Create Order If Product In Stock(hub)
    createOrder = async (req, res) => {
        try {
            const product = await Product.findOne({ _id: req.body.productId });
            if (product) {
                if (product.productQuantity < req.body.orderQuantity || product.productQuantity === 0) {
                    return res.status(500).json("Quantity Insufficient");
                }
                const user = await User.findOne({ _id: req.body.userId });
                if (user) {
                    product.productQuantity -= req.body.orderQuantity;
                    await product.save();
                    const hub = await Hub.findOne({ _id: product.hub });
                    hub.capacity -= req.body.orderQuantity;
                    await hub.save();
                    const order = await Order.create(req.body);
                    return res.status(201).json(order);
                } else {
                    return res.status(404).json("User does not exist");
                }
            } else {
                return res.status(404).json("Product does not exist");
            }
        } catch (err) {
            console.error("There is Error", err);
            return res.status(500).json("Internal Server Error");
        }
    };
    

    // get All Details Of Products By Its ID
    getOrderById = async (req, res) => {
        try {
            return res.status(200).json(await Order.findById(req.params.id).populate('userId').populate('productId'));
        } catch (err) {
            return console.log("There is Error While Getting order by Id ", err);
        }
    }
}