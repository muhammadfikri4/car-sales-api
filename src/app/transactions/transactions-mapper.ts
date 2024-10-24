import { Car, Transaction } from "@prisma/client";
import { TransactionDTO } from "./transactions-dto";

export interface TransactionCars extends Transaction {
  car: Car;
}

export const getTransactionsDTOMapper = (
  data: TransactionCars[]
): TransactionDTO[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    code: item.code,
    amount: Number(item.amount),
    transactionDate: item.createdAt,
    car: {
      id: item.car.id,
      name: item.car.name,
      color: item.car.color,
      code: item.car.code,
      merk: item.car.merk,
      year: item.car.year,
      price: Number(item.car.price),
    },
  }));
};
