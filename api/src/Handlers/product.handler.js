const { postProduct, getProducts, deleteProduct,getProductById } = require("../Controller/products.controller")
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
        } else if (allProduct.length === 0) {
            res.status(404).send("There's no products")
        } else {
            res.status(200).json(allProduct);
        }
    } catch (error) {
        console.error("Error en getAllProductHandler:", error.message);
    }
};
const getProductByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getProductById(id);
        if (!product) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: "Error en el servidor." });
    }
};

const newProduct = async (req, res) => {
    try {
        const productData = req.body
        const poster = await postProduct(productData)
        console.log(poster);
        return res.status(200).json(poster)

    } catch (error) {
        console.log(error);

    }
}

const prodDeleter = async (req, res) => {
    try {
        const {id} = req.params;
        const productDeleteResult = await deleteProduct(id);
        if (!productDeleteResult) {
            return res.status(404).json({ error: "The ID to delete does not exist" });
        } else {
            return res.status(200).json(id);
        }
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};


module.exports = {
    newProduct,
    getAllProductHandler,
    prodDeleter,
    getProductByIdHandler
}