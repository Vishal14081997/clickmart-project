import Category from "../models/category.model.js";
import User from "../models/user.model.js";

export const profile = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({
            message: "profile fetch successfully",
            data: user
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
export const AddCategory = async (req, res) => {
    try {
        const { CName, CDesc } = req.body;
        const existingCategory = await Category.findOne({ CName: CName });
        if (existingCategory) {
            return res.status(400).json({ message: "Category already exist" })
        }
        const category = await Category.create({
            CName, CDesc
        });
        res.status(200).json({
            message: "Category created",
            data: category
        })

    } catch (error) {
        console.log("AddCategory error:", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const getAllCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({
            message: "Get all Category",
            data: category
        })
    } catch (error) {
        console.log("getAllCategory error:", error.message);
        res.status(500).json({ message: error.message })
    }
}