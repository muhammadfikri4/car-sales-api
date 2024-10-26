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
      userId: data.userId,
      transactionDate: data.transactionDate
    },
  });
};

export const getTransactions = async (query: Query, userId: string) => {
  const { search } = query;
  return await prisma.transaction.findMany({
    where: {
      userId,
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
      user: true
    },
  });
};
