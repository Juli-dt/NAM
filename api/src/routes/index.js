const { Router } = require("express");


const products = require("./products.js")
const categories = require ("./categories.js")
const router = Router();

router.use("/products", products);
router.use("/categories", categories)



module.exports = router;