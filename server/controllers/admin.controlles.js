import Category from "../models/category.model.js";
import Product from "../models/product.model.js";
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
            CName, CDesc, image_url: req.imageUrl
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
export const uploadImage = async (req, res) => {
    try {
        res.status(200).json({
            message: "image upload",
            data: req.imageUrl
        })
    } catch (error) {
        console.log(error);

    }
}
export const getCategoryDetails = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId)
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        return res.status(200).json({
            message: "Get Category Details",
            data: category
        })
    } catch (error) {
        console.log("getCategoryDetails error:", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const { CName, CDesc, status } = req.body;
        const category = await Category.findById(categoryId)
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        category.CName = CName || category.CName
        category.CDesc = CDesc || category.CDesc
        category.status = status || category.status
        if (req.imageUrl) {
            category.image_url = req.imageUrl
        }
        await category.save()

        return res.status(200).json({
            message: "Get Category Details",
            data: category
        })
    } catch (error) {
        console.log("updateCategory error:", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.findById(categoryId).select("id")
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        await Category.findByIdAndDelete(categoryId)
        return res.status(200).json({
            message: "delete category",
        })
    } catch (error) {
        console.log("deleteCategory error:", error.message);
        res.status(500).json({ message: error.message })
    }
}
export const addProduct = async (req, res) => {
    try {
        const { CID, PName, PDesc, price, Qty, MRP } = req.body;
        const category = await Category.findById(CID).select("id CName")
        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            })
        }
        const existProduct = await Product.findOne({ PName });
        if (existProduct) {
            return res.status(400).json({
                message: "product already exist"
            })
        }
        console.log(existProduct);
        const product = await Product.create({
            CID, PName, PDesc, price, Qty, MRP, image_url: req.imageUrl
        })
        return res.status(201).json({
            message: "Product created successfully",
            data: product
        })
    } catch (error) {
        console.log("addProduct error:", error.message);
        res.status(500).json({ message: error.message })
    }
}
