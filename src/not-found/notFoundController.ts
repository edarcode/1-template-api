import { Req, Res } from "../types";
import { notFoundService } from "./notFoundService";

export const notFoundController = async (_req: Req, res: Res) => {
  const notFound = notFoundService();
  res.json(notFound);
};
