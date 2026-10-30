import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    CID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
        required: true
    },
    PName: {
        type: String,
        trim: true,
        required: true
    },
    PDesc: {
        type: String,
        trim: true,
    },
    Qty: {
        type: Number,
        required: true,
        default: 0,
        min: 0
    },
    MRP: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    image_url: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
    { timestamps: true }
);

const Product = mongoose.model("products", productSchema)
export default Product;
