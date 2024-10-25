import { prisma } from "../../config";
import { CreateBuyer } from "./buyers-dto";

export const createBuyer = async (data: CreateBuyer) => {
  return await prisma.buyer.create({
    data: {
      name: data.name,
      address: data.address,
      code: data.code,
      job: data.job,
      phoneNumber: data.phoneNumber,
    },
  });
};
