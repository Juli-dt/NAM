const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products.js")
const categories = require ("./categories.js")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/products", products);
router.use("/categories", categories)


router.use((req, res, next) => {
    res.status(404).json({ message: "Ruta no encontrada" });
});

module.exports = router;