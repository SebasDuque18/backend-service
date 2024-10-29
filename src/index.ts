import express { application } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const app: Application = express();
const PORT = process.env.PORT ?? 3000;

//middleware
app.use(cors());
app.use(express.json());

//rutas
