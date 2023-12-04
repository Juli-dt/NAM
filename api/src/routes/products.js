const { Router } = require("express");
const productRouter = Router();
const {
    newProduct,
    getAllProductHandler,
    prodDeleter,
    getProductByIdHandler} = require("../Handlers/product.handler")

productRouter.get("/", getAllProductHandler)
productRouter.post("/", newProduct)
productRouter.delete("/:id", prodDeleter)
productRouter.get("/:id", getProductByIdHandler);

module.exports = productRouter;
