import { LECTOR_REPOSITORY } from "src/core/constants";
import { Lector } from "./entities/lector.entity";


export const lectorProviders = [
    {
        provide: LECTOR_REPOSITORY,
        useValue: Lector
    }
]