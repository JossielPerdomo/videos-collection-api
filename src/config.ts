import dotenv from 'dotenv';
dotenv.config();

export default {
    MONGO_DATABASE: process.env.MONGODB || 'videos-collection',
    PORT: process.env.PORT || 3000
}