import Hub from "../model/Hub.js";
import Product from '../model/Product.js'

export default class hubController {

    // Create New hub For Keeping Products By Admin Only
    createNewHub = async (req, res) => {

        try {
            if (req.user.user.role == 'admin') {
                return res.status(201).json(await Hub.create(req.body))
            } else { return res.status(401).json("You Dont Have Permission") }

        } catch (err) {
            return console.log("There is error while creating new Hub", err);
        }
    }

    // Geting All Hub
    getAllHub = async (req, res) => {
        try {
            return res.status(200).json(await Hub.find({}));
        } catch (err) {
            return console.log("There is error While Getting All hub", err);
        }
    }

    // Deleting All Hub
    deleteHub = async (req, res) => {
        if (req.user.user.role == 'admin') {
            const hub = await Hub.findOne({ id: req.params.id });
            if (hub) {
                const course = await Product.updateMany({ hub: hub.id }, { $pull: { hub: hub.id } })
                hub.deleteOne();
                return res.json(`Hub Deleted!!!`)
            } else {
                return res.json(`Hub Does not Exist!!!!!!!!!!`)
            }
        } else {
            return res.status(401).json("You Dont have Permission")
        }
    }


    // Update Hub By Admin Only
    updateHub = async (req, res) => {
        try {
            if (req.user.user.role == 'admin') {
                const hubId = req.params.id;
                const updates = req.body;
                const update = await User.findOneAndUpdate(
                    { _id: hubId },
                    { $set: updates },
                    { new: true } // To return the updated document
                );
                if (update) {
                    return res.json(update);
                } else {
                    return res.status(404).json({ error: "Hub does't  found" });
                }
            }else{
                return res.status(401).json("You Dont Have Permission")
            }
        } catch (err) {
            console.error("Error occurred while updating Hub:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}