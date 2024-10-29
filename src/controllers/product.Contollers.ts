import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";

const ProductRepository = AppDataSource.getRepository(Product);

//obtener (GET) de todos los productos
export const getAllProducts = async(req: Request, res: Response) => {
    try {
     const products = await ProductRepository.find(); 
     res.json(products);  
    } catch(error) {
    res.status(500).json({mesasge: "Error al obtener los productos."});
    }
    
}

//obtener (GET) un producto por ID
export const getProductByID =async(req: Request, res: Response) =>{
 try {
    const product = await ProductRepository.findOneBy({
    id: parseInt(req.params.id)
    });

    if(product){
        res.json(product)
    }else {
        res.status(404).json({message: "Producto no encontado."})
    }
    }catch(error){
        res.status(500).json({mesasge: "Error al obtener los productos."});
    }
}
