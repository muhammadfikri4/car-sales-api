import { Query } from "../../interface/Query";
import { prisma } from "../../config";
import { CreateTransaction } from "./transactions-dto";

export const createTransaction = async (data: CreateTransaction) => {
  return await prisma.transaction.create({
    data: {
      // name: data.name,
      code: data.code,
      carId: data.carId,
      amount: data.amount,
      fakturNumber: data.fakturNumber,
      buyerId: data.buyerId,
    },
  });
};

export const getTransactions = async (query: Query) => {
  const { search } = query;
  return await prisma.transaction.findMany({
    where: {
      // name: {
      //   contains: search,
      //   mode: "insensitive",
      // },
      car: {
        name: {
          contains: search,
          mode: "insensitive",
        },
      },
    },
    include: {
      car: true,
      buyer: true,
    },
  });
};
