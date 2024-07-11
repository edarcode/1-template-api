import { Res } from "../../types/types";
import { ReqWithParamsGetUsers } from "../dto/getUsersDto";
import { getUsersService } from "../services/getUsersService";

type Reqq = ReqWithParamsGetUsers;

export const getUsersController = async (req: Reqq, res: Res) => {
  const allUsers = await getUsersService(req.paramsToGetUsers);
  res.json(allUsers);
};
