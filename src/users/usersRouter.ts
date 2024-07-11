import { Router } from "express";
import { getUsersController } from "./controllers/getUsersController";
import { getUsersDto } from "./dto/getUsersDto";

export const usersRouter = Router();

usersRouter.get("", getUsersDto, getUsersController);
