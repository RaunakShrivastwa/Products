import bcrypt from 'bcryptjs'
import User from '../model/User.js';
import jsonWebToken from 'jsonwebtoken';
import Order from '../model/Order.js';
import Product from '../model/Product.js';
import Hub from '../model/Hub.js';

export default class userController {

    // Create Your Account By Default Set role as User
    SignUp = async (req, res) => {
        try {
            const user = await User.findOne({ userEmail: req.body.userEmail });
            if (user) {
                return res.status(500).json(`User Alredy Exist!!!!!!!!`)
            }
            //  req.body.userPassword = await  bcrypt.hash(req.body.userPassword,10);
            return res.status(201).json(await User.create(req.body))
        } catch (err) {
            return console.log("There is Error While Creating Your Account", err);
        }
    }

    // Login User OR Admin Role Base
    loginUser = async (req, res) => {
        try {
            const user = await User.findOne({ userEmail: req.body.userEmail });
            // console.log(user); 
            // const encPassword = await bcrypt.compare(req.body.userPassword, user.userPassword);
            if (!user || user.userPassword != req.body.userPassword) {
                return res.json("Invalide Credentials");
            }

            return res.status(200).json(jsonWebToken.sign({ user }, process.env.SecreteKey, { expiresIn: '1h' }))
        } catch (err) {
            return console.log("There is Error While Login", err);
        }
    }

    // Admin Gives Approval Only
    approvalOrder = async (req, res) => {
        try {
            if (req.user.user.role == 'admin') {
                const order = await Order.findById(req.params.id)
                order.orderStatus = "placed";
                order.save();
                return res.status(200).json({ Placed: order })
            }
        } catch (err) {
            return console.log("There is Error ", err);
        }
    }


    // Search Product To Your Nearest City
    searchNearByProduct = async (req, res) => {
        try {
            const user = req.user.user;
            const hub = await Hub.find({ pinCode: user.pinCode }).populate('Products');
            return res.status(200).json(hub);
        } catch (err) {
            return console.log("There is Error ", err);
        }


    }


}