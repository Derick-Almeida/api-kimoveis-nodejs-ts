import "reflect-metadata";
import "express-async-errors";
import express from "express";
import handlerErrorMiddleware from "./middlewares/handler.middleware";
import appRoutes from "./routes";

const app = express();
app.use(express.json());

appRoutes(app);

app.use(handlerErrorMiddleware);

export default app;
