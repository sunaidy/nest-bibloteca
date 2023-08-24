import { LIBRO_REPOSITORY } from "src/core/constants";
import { Libro } from "./entities/libro.entity";

export const libroProviders = [
    {
        provide: LIBRO_REPOSITORY,
        useValue: Libro
    }
]