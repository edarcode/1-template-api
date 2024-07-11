import { usersRouter } from "../users/usersRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";
import { server } from "./server";

export const routes = () => {
  server.use("/", welcomeRouter);
  server.use("/users", usersRouter);
};
