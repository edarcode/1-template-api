import { Prisma } from "@prisma/client";
import { connDb } from "../../db/connDb";

export type ParamsToGetUsersService = {
  page?: number;
  take?: number;
  name?: string;
};
type Params = ParamsToGetUsersService;
type Where = Prisma.UserWhereInput;

export const getUsersService = async (params: Params = {}) => {
  const { page = 1, take = 10, name } = params;

  const where: Where = {
    name: { contains: name, mode: "insensitive" },
  };

  const totalUsers = await connDb.user.count({ where });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where,
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, users };
};
