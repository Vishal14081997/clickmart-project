import express from "express"
import verifyToken from "../middleware/verify.middleware.js";
import { AddCategory, getAllCategory, profile } from "../controllers/admin.controlles.js";

const router = express.Router();

router.post("/add-category", verifyToken, AddCategory)
router.get("/get-all-category", verifyToken ,getAllCategory )
router.get("/get-profile" , verifyToken , profile)


export default router;

