const { Router } = require("express");
const productRouter = Router();
const {newProduct, getAllProductHandler,prodDeleter} = require("../Handlers/product.handler")

productRouter.get("/", getAllProductHandler)
productRouter.post("/", newProduct)
productRouter.delete("/", prodDeleter)

module.exports = productRouter;
