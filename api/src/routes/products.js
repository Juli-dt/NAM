const { Router } = require("express");
const productRouter = Router();
const {newProduct, getAllProductHandler} = require("../Handlers/product.handler")

productRouter.get("/", getAllProductHandler)
productRouter.post("/", newProduct)


module.exports = productRouter;
