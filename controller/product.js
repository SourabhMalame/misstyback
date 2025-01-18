import Product from "../model/product.js";
import mongoose from "mongoose";

export const addProduct = async (req, res) => {
  const { name, description, price, imageUrl, category } = req.body;
  try {
    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      category,
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product Data" });
  }
};

export const getAllPRoducts = async (req, res) => {
  try {
    const allproducts = await Product.find();
    res.status(200).json(allproducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getProductbyid = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if the id is a valid ObjectId before querying
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Product ID" });
    }

    // Convert the id to ObjectId using 'new' keyword and query the database
    const productById = await Product.findById(new mongoose.Types.ObjectId(id));

    if (!productById) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    res.status(200).json(productById);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "Product not found" })
  }


  try {

    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not Dound" })
    }

    res.status(200).json({ message: `Product with id ${id} deleted successfully` })

  } catch (error) {
    res.status(500).json({ message: "Error deleting the product" })
  }


}
