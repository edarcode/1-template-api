import { Req, Res } from "../types";
import { welcomeService } from "./welcomeService";

export const WelcomeController = async (_req: Req, res: Res) => {
  const welcome = welcomeService();
  res.json(welcome);
};
