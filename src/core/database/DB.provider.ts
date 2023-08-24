import { Sequelize } from 'sequelize-typescript'
import { SEQUELIZE } from '../constants'

import { Libro } from '../../libro/entities/libro.entity'
import { Lector } from '../../lector/entities/lector.entity'
import { Prestamo } from '../../prestamo/entities/prestamo.entity'

export const databaseProviders = [
    {
        provide: SEQUELIZE,
        useFactory: async () => {
            const sequelize = new Sequelize({    
                dialect:'mysql',   
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                host: process.env.DB_HOST,
                port: parseInt(process.env.DB_PORT),
           })
            sequelize.addModels([Libro, Lector, Prestamo])
            await sequelize.sync()
            return sequelize
    },
}]