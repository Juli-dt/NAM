const { Router } = require("express");
const {addCategory,
        deleter,
        getAllCategories,
        getCatByName
    } = require("../Handlers/categories.handler")

const categoryRouter = Router()

categoryRouter.get("/", getAllCategories)

categoryRouter.get("/find/:name", getCatByName)

categoryRouter.post("/", addCategory)

categoryRouter.delete("/:id", deleter)