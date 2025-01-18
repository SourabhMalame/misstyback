import { adminLogin } from "../controller/admin.js";
import { getAllPRoducts } from "../controller/product.js";
import express from "express"

const router = express.Router();

router.get("/getallproduct", getAllPRoducts)
router.post("/adminlogin", adminLogin)

export default router;





















