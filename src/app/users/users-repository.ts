import { prisma } from "../../config";
import { CreateUserDAO } from "./users-dao";
import { queryPagination } from "../../utils/Pagination";
import { Query } from "../../interface/Query";

export const createUser = async (
  data: CreateUserDAO,
) => {
  return await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
};

export const getUsers = async (query: Query) => {
  const { search } = query;
  return prisma.user.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    ...queryPagination(query),
  });
};

export const getUsersCount = async (query: Query) => {
  const { search } = query;
  return prisma.user.count({
    where: {
      name: {
        contains: search,
      },
    },
  });
};


export const getUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const getUserById = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};
