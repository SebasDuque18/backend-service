import swaggerJsdoc, { Options } from "swagger-jsdoc";

const swaggerOptions: Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Backend Service API - Sebas Duque",
            version: "1.0.0",
            description: "API Para Catalogo de Productos"
        },
        servers: [
            {
                url: "http://localhost:3000/"
            }
        ]
    },
    apis:[
     "./src/routers/productRoutes.ts"   
    ]
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec