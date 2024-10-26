export interface CreateTransaction {
  code: string;
  // name: string;
  carId: string;
  userId: string;
  amount: number;
  buyerId: string;
  fakturNumber: string;
}

export interface TransactionBodyDTO {
  color: string;
  carCode: string;
  merk: string;
  price: number;
  carName: string;
  year: number;

  fakturNumber: string;

  buyerName: string;
  buyerAddress: string;
  buyerCode: string;
  buyerJob: string;
  buyerPhoneNumber: string;
}

export interface TransactionDTO {
  id: string;
  code: string;
  amount: number;
  transactionDate: string;
  fakturNumber: string
  createdBy: string
  car: {
    id: string;
    name: string;
    color: string;
    code: string;
    merk: string;
    year: number;
    price: number;
  };
  buyer: {
    id: string;
    name: string;
    address: string;
    code: string;
    job: string;
    phoneNumber: string;
  };
}
