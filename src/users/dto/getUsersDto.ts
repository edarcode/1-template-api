import z from "zod";
import { Next, Req, Res } from "../../types";
import { ParamsToGetUsers } from "../services/getUsersService";

export const getUsersDto = (req: Requ, res: Res, next: Next) => {
  try {
    const paramsToGetUsers = schema.parse(req.query);
    req.paramsToGetUsers = paramsToGetUsers;
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

const schema = z
  .object({
    page: z.coerce.number().min(1),
    take: z.coerce.number().min(1),
    name: z.string().min(1),
  })
  .partial();

export interface ReqWithParamsGetUsers extends Req {
  paramsToGetUsers?: ParamsToGetUsers;
}
type Requ = ReqWithParamsGetUsers;
