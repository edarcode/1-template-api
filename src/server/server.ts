import express from "express";
import { middlewares } from "./middlewares";
import { routes } from "./routes";

export const server = express();
middlewares();
routes();
