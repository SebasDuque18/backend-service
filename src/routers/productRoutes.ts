import { Router } from "express";
import {
    getAllProducts,
    getProductByID,
    createProduct,
    updateProduct,
    deleteProduct
}   from "../controllers/productContollers"

    const router = Router();

    /**
     * @swagger
     * tags:
     *   name: Products
     *   description: CRUD Relacionado con los Products
     */  

    /**
     * @swagger 
     * /api/products:
     *    get:
     *      summary: obtener todos los productos
     *      tags: [Products]
     *      responses:
     *       200:
     *        description: Lista de productos
     */

    router.get("/", getAllProducts); //trae todos los productos

    /**
     * @swagger
     * /api/prodcuts/{id}:
     *   get:
     *    summary: Obtener un producto por ID
     *    tags: [Products]
     *    parameters:
     *      - in: path
     *        name: id
     *        required: true
     *        schema:
     *          type: inter
     *        description: ID del producto
     *    responses:
     *      200:
     *        description: Detalle del producto
     *      404:
     *        description: Producto no encontrado
     */
    router.get("/:id", getProductByID); //trae un solo producto

    /**
     * @swagger
     * /api/products:
     *   post:
     *    summary: Crear un nuevo producto
     *    tags: [Products]
     *    requestBody:
     *     required: true
     *     content:
     *      application/json:
     *       schema:
     *        type: object
     *        required:
     *         - name
     *         - description
     *         - price
     *        properties:
     *         name:
     *           type: string
     *         description:
     *           type: string
     *         price: 
     *           type: number
     *    responses:
     *     201:
     *       description: Producto creado
     *     500:
     *       description: Error en el servidor
     */
    router.post("/", createProduct); //crear un producto
    router.put("/:id", updateProduct); //actualizar un producto
    router.delete("/:id", deleteProduct); //borrar un producto

    export default router;