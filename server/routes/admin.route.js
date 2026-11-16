import express from "express"
import verifyToken from "../middleware/verify.middleware.js";
import { AddCategory, getAllCategory, profile, uploadImage } from "../controllers/admin.controlles.js";
import upload from "../middleware/upload.middleware.js";
import uploadToCloudinary from "../middleware/cloudinary.middleware.js";


const router = express.Router();

router.post("/add-category", verifyToken, AddCategory)
router.get("/get-all-category", verifyToken, getAllCategory)
router.get("/get-profile", verifyToken, profile)
router.post("/image-upload", upload.single("image"), uploadToCloudinary, uploadImage)


export default router;

