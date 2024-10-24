export interface CreateTransaction {
  code: string;
  name: string;
  carId: string;
  amount: number;
}

export interface TransactionBodyDTO {
  buyerName: string;
  color: string;
  carCode: string;
  merk: string;
  price: number;
  carName: string;
  year: number;
}

export interface TransactionDTO {
  id: string;
  name: string;
  code: string;
  amount: number;
  transactionDate: Date;
  car: {
    id: string;
    name: string;
    color: string;
    code: string;
    merk: string;
    year: number;
    price: number;
  };
}
