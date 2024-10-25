import { createCars } from "../cars/cars-repository";
import { TransactionBodyDTO } from "./transactions-dto";
import { createTransaction, getTransactions } from "./transactions-repository";
import { Query } from "../../interface/Query";
import { getTransactionsDTOMapper } from "./transactions-mapper";
import { createBuyer } from "app/buyers/buyers-repository";

export const createTransactionService = async (data: TransactionBodyDTO) => {
  const cars = await createCars({
    merk: data.merk,
    code: data.carCode,
    color: data.color,
    year: data.year,
    price: data.price,
    name: data.carName,
  });

  const buyer = await createBuyer({
    address: data.buyerAddress,
    code: data.buyerCode,
    job: data.buyerJob,
    name: data.buyerName,
    phoneNumber: data.buyerPhoneNumber,
  });

  const transaction = await createTransaction({
    carId: cars.id,
    code: `TRX-${+new Date()}`,
    // name: data.buyerName,
    buyerId: buyer.id,
    fakturNumber: data.fakturNumber,
    amount: data.price,
  });

  return {
    cars,
    transaction,
    buyer,
  };
};

export const getTransactionsService = async (query: Query) => {
  const transactions = await getTransactions(query);
  const data = getTransactionsDTOMapper(transactions);
  return data;
};
