import { User } from "@prisma/client";
import { UserDTO } from "./users-dto";

export const getUsersDTOMapper = (users: User[]): UserDTO[] => {
  return users.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
  }));
};

export const getUserDTOMapper = (user: User): UserDTO => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
  };
};
