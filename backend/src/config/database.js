import mongoose from 'mongoose'

import dotenv from 'dotenv'
dotenv.config()

export const connectDB = async () => {
    try {
        if (process.env.DATABASE_URL_PROD) {
            await mongoose.connect(process.env.DATABASE_URL_PROD)
        } else if (process.env.DATABASE_URL_DEV) {
            await mongoose.connect(process.env.DATABASE_URL_DEV)
        } else {
            console.log("Nenhuma variavel de conexão encontrada!");
        }
        console.log("MongoDB conectado!");        
    } catch (error) {
        console.log(error.message);        
    }
}