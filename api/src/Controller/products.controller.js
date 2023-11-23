const { Product, Category } = require("../db");

const getProducts = async () => {
    try {
        const products = await Product.findAll({
            include: {
                model: Category,
                as: "categories",
                attributes: ["name"],
                through: { attributes: [] }
            },
        });
        return products
    } catch (error) {
        return error
    }
}

const postProduct = async (dataProduct) => {
    try {
        const {
            name,
            description,
            images,
            categories
        } = dataProduct
        const newProduct = await Product.create({
            name,
            description,
            images,
            categories
        })
        return newProduct
    } catch (error) {
        return error
    }
}

const deleteProduct = async (id) => {
    try {
        const deleter = await Product.destroy({
            where: {
                product_id: id,
            },
        });
        if (deleter === 1) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return "Error al eliminar el product", error;
    }
};

module.exports = {
    postProduct,
    getProducts,
    deleteProduct
}