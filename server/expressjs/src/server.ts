import express, { Express, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import http from "http";
import router from "./router/index";
import { AppError } from "./utils/error/AppError";
import path from "path";

dotenv.config();

const app: Express = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Router */
app.use(router)

export const server = http.createServer(app)

app.use((req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(
    `Can't find ${req.originalUrl} on this server`,
    404
  );
  next(error);
});

/* eslint-disable-next-line no-unused-vars */
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const error = {
    statusCode: err.statusCode || 500,
    success: err.success,
    message: err.message,
  };

  res.status(error.statusCode).json({
    success: error.success,
    message: error.message,
    data: null,
  });
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  return res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
  });
});