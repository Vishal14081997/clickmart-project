import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minlength: 6
    },
    phone_no: {
        type: String
    },
    profile_pic: {
        type: String
    },
    userType: {
        type: String,
        enum: ["Admin", "Agency", "Customer"],
        default: "Customer"
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
    { timestamps: true }
);
const User = mongoose.model("user", userSchema);

export default User;