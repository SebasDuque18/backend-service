import { Router } from "express";
import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
}   from "../controllers/product.Contollers"

    const router = Router();

    router.get("products/", getAllProducts); //trae todos los productos
    router.get("product/:id", getProductByID); //trae un solo producto
    router.post("products/", createProduct); //crea un producto
    router.put("products/:id", updateProduct); //actualizar un producto
    router.delete("products/:id", deleteProduct); //borrar un producto

    export default router;