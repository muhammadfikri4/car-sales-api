import { createCars } from "app/cars/cars-repository";
import { TransactionBodyDTO } from "./transactions-dto";
import { createTransaction, getTransactions } from "./transactions-repository";
import { Query } from "interface/Query";
import { getTransactionsDTOMapper } from "./transactions-mapper";

export const createTransactionService = async (data: TransactionBodyDTO) => {
  const cars = await createCars({
    merk: data.merk,
    code: data.carCode,
    color: data.color,
    year: data.year,
    price: data.price,
    name: data.carName,
  });

  const transaction = await createTransaction({
    carId: cars.id,
    code: `TRX-${+new Date()}`,
    name: data.buyerName,
    amount: data.price,
  });

  return {
    cars,
    transaction,
  };
};

export const getTransactionsService = async (query: Query) => {
  const transactions = await getTransactions(query);
  const data = getTransactionsDTOMapper(transactions);
  return data;
};
