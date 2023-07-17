import server from './services/server'
import { initMongoDB } from './db/database'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT ?? 3000;

const init = async () => {
    try {
        await initMongoDB();
        server.listen(PORT)
        console.log(`Server listening on port ${PORT}`)
    } catch (error) {
        console.log('Error starting server:', error)
    }
}

init()