const { postProduct, getProducts } = require("../Controller/products.controller")
const Product = require("../models/Product");

const getAllProductHandler = async (req, res) => {
    try {
        const name = req.query.name ? req.query.name.toLowerCase() : null;
        const allProduct = await getProducts();
        if (name) {
            console.log("Un name a buscar", name);
            const filteredProduct = allProduct.filter((product) =>
                product.name.toLowerCase().includes(name)
            );
            filteredProduct.length
                ? res.status(200).json(filteredProduct)
                : res.status(404).json({ error: "Producto no encontrado" });
        } else {
            res.status(200).json(allProduct);
        }
    } catch (error) {
        console.error("Error en getAllProductHandler:", error.message);
    }
};

const newProduct = async (req, res) =>{
    try {
        const productData = req.body
        const poster = await postProduct(productData)

        return res.status(200).json(poster)

    } catch (error) {
        console.log(error);

    }
}

module.exports = {
    newProduct,
    getAllProductHandler
}