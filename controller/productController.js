import Product from "../model/Product.js"
import Hub from '../model/Hub.js';

export default class productController {

    // create Product 
    createProduct = async (req, res) => {
        console.log(req.user.user);
        try {
            if (req.user.user.role == 'admin') {

                const hub = await Hub.findOne({ _id: req.body.hub });
                console.log(hub);
                if (hub) {
                    const product = await Product.create(req.body);
                    hub.Products.push(product);
                    hub.save();
                    return res.status(201).json(product);
                }
            }else{return res.status(401).json("You don't have Permission to Create Products")}

        } catch (err) {
            return console.log("There is Error While Creating Product", err);
        }
    }


    // Fetching Single Product
    getSingleProduct = async (req, res) => {
        try {
            return res.json(await Product.findById(req.params.id));
        } catch (err) {
            return console.log("There is Error While Getting Single Prodyct", err);
        }
    }


    // Delete Product By Admin Only
    deleteProduct = async (req, res) => {
        try {
            if(req.user.user.role=='admin')
              return res.json(await Product.findByIdAndDelete(req.params.id));
            else return res.status(401).json("You Dont Have Permission");
        } catch (err) {
            return log("There is Error While Deleting Product", err)
        }
    }


    // Get All Products
    getAllProducts = async (req, res) => {
        try {
            console.log(req.user);
            if (!req.user) {
                return res.status(401).json({ error: 'Unauthorized' });
            }
            return res.status(200).json(await Product.find({}))
        } catch (err) {
            return console.log("There is Error While Getting All Products", err);
        }
    }
}