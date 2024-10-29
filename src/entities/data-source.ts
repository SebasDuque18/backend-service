import "reflect-metadata"
import { DataSource } from "typeorm"
import { Product } from "../Product";

export const AppDataSource = new DataSource({
    type: "sqlite", //tipo de base de datos
    database: "database.sqlite", //nombre de base de datos
    synchronize: true, //sincronizacion activa
    logging: false, //sin inicio de sesion en la BD
    entities: [Product], //se agregan las entidades creadas
    migrations: [],
    subscribers: []
});