import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config";
import videosPath from "./routes/videos.routes";

const app = express();
app.set('port', config.PORT);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/videos', videosPath);

export default app;