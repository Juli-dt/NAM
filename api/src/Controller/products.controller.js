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
            categoryName
        } = dataProduct
        const newProduct = await Product.create({
            name,
            description,
            images,
        })

        if (categoryName) {
            const category = await Category.findOne({ where: { name: categoryName } });

            if (!category) {
                return("Category not found with name " + categoryName);
            }

            // Assign the category to the product
            await newProduct.setCategory(category);
        }

        return newProduct
    } catch (error) {
        throw error
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
const getProductById = async (id) => {
    try {
        const product = await Product.findByPk(id, {
            include: {
                model: Category,
                as: "categories",
                attributes: ["name"],
                through: { attributes: [] },
            },
        });

        return product;
    } catch (error) {
        throw new Error("Error al obtener el producto por ID");
    }
};
module.exports = {
    postProduct,
    getProducts,
    deleteProduct,
    getProductById
}