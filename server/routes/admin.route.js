import express from "express"
import verifyToken from "../middleware/verify.middleware.js";
import { AddCategory, addProduct, deleteCategory, getAllCategory, getCategoryDetails, profile, updateCategory, uploadImage } from "../controllers/admin.controlles.js";
import upload from "../middleware/upload.middleware.js";
import uploadToCloudinary from "../middleware/cloudinary.middleware.js";


const router = express.Router();

router.post("/add-category", upload.single("category_image"), uploadToCloudinary, verifyToken, AddCategory)

router.get("/get-all-category", verifyToken, getAllCategory)
router.get("/get-profile", verifyToken, profile)
router.post("/image-upload", upload.single("image"), uploadToCloudinary, uploadImage)
router.get("/get-category-details/:id", verifyToken, getCategoryDetails)
router.post("/edit-category/:id", verifyToken, upload.single("category_image"), uploadToCloudinary, updateCategory)
router.post("/delete-category/:id", verifyToken, deleteCategory)
router.post("/add-product", verifyToken, upload.single("product_image"), uploadToCloudinary ,addProduct)


export default router;

