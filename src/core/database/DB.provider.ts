import { Sequelize } from 'sequelize-typescript'
import { SEQUELIZE } from '../constants'

import { Libro } from '../../libro/entities/libro.entity'

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
            sequelize.addModels([Libro])
            await sequelize.sync()
            return sequelize
    },
}]