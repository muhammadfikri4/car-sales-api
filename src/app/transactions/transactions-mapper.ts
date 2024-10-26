import { Buyer, Car, Transaction, User } from "@prisma/client";
import { TransactionDTO } from "./transactions-dto";

export interface TransactionCars extends Transaction {
  car: Car;
  buyer: Buyer;
  user: User;
}

export const getTransactionsDTOMapper = (
  data: TransactionCars[]
): TransactionDTO[] => {
  return data.map((item) => ({
    id: item.id,
    fakturNumber: item.fakturNumber,
    code: item.code,
    createdBy: item.user.name,
    amount: Number(item.amount),
    transactionDate: item.transactionDate as string,
    car: {
      id: item.car.id,
      name: item.car.name,
      color: item.car.color,
      code: item.car.code,
      merk: item.car.merk,
      year: item.car.year,
      price: Number(item.car.price),
    },
    buyer: {
      id: item.buyer.id,
      name: item.buyer.name,
      address: item.buyer.address,
      code: item.buyer.code,
      job: item.buyer.job,
      phoneNumber: item.buyer.phoneNumber,
    },
  }));
};
