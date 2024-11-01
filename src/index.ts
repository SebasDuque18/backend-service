import express, { Application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import router from "./routers/product.Routes";
import swaggerSpec from "./swagger/swagger";
import swaggerUi from "swagger-ui-express";


const app: Application = express();
const PORT = process.env.PORT ?? 3000;

//middleware
app.use(cors());
app.use(express.json());

//rutas
app.use("/API/", router); //ruta de productos

//documentacion swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//inicializcion de la base de datos y el servido
AppDataSource.initialize()
.then(() => {
    app.listen(() =>{
        console.log(`Servidor corriendo en htpp://localhost:${PORT}\n`)
        console.log(`Endpoints:`)
        console.log(`API Products htpp://localhost:${PORT}/api/products`)
        console.log(`Documentacio:`)
        console.log(`Swagger en htpp://localhost:${PORT}/api-docs`);
        
    });
})
.catch((error) => console.log (error));
