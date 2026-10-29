import express from "express"
import { signup , login, profile} from "../controllers/auth.controlles.js";
import verifyToken from "../middleware/verify.middleware.js";

const router = express.Router();

router.post("/signup" , signup );
router.post("/login", login)
router.get("/get-profile", verifyToken ,profile)

export default router;

