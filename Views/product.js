const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts
} = require("../Controllers/product");


//all of params
router.param("productId", getProductById);

//all of actual routes
//create route
router.post(
  "/product/create",
  createProduct
);

// read routes
router.get("/product/:productId", getProduct);

router.get("/product/photo/:productId", photo);

//delete route
router.delete(
  "/product/:productId",
  deleteProduct
);

//update route
router.put(
  "/product/:productId",
  updateProduct
);

//listing route
router.get("/products", getAllProducts);



module.exports = router;
