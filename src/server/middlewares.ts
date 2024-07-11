import cors from "cors";
import express from "express";
import { server } from "./server";

export const middlewares = () => {
  server.use(cors());
  server.use(express.json());
};
