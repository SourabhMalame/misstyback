import express from "express";
import { getAllPRoducts, addProduct, getProductbyid, deleteProduct } from "../controller/product.js";

const router = express.Router();

router.post("/addproduct", addProduct);
router.get("/allproducts", getAllPRoducts);
router.get("/getproduct/:id", getProductbyid)
router.delete("/:id", deleteProduct)

export default router;

