import { prisma } from "../../config";
import { CreateCarsDTO } from "./cars-dto";

export const createCars = async (data: CreateCarsDTO) => {
  return await prisma.car.create({
    data: {
      merk: data.merk,
      code: data.code,
      color: data.color,
      year: data.year,
      price: data.price,
      name: data.name,
    },
  });
};
