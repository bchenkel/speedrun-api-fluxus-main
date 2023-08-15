import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { router } from "./routes/index.routes";
import { adminRouter } from "./routes/admin.routes";
import { responsibleRouter } from "./routes/responsible.routes";
import { errorMiddleware } from "./middlewares/auth/error.middleware";

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);
server.use("/admin", adminRouter);
server.use("/responsible", responsibleRouter);
server.use(errorMiddleware);

export { server };
