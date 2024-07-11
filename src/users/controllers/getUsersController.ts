import { Res } from "../../types";
import { ReqWithParamsGetUsers } from "../dto/getUsersDto";
import { getUsersService } from "../services/getUsersService";

type Requ = ReqWithParamsGetUsers;

export const getUsersController = async (req: Requ, res: Res) => {
  const allUsers = await getUsersService(req.paramsToGetUsers);
  res.json(allUsers);
};
