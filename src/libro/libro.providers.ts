import { LIBRO_REPOSITORY } from "../core/constants";
import { Libro } from "./entities/libro.entity";

export const libroProviders = [
    {
        provide: LIBRO_REPOSITORY,
        useValue: Libro
    }
]