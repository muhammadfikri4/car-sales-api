import { Query } from "../../interface/Query";
import { userRepository } from "../../repository";
import { Meta } from "../../utils/Meta";
import { getUsersDTOMapper } from "./user-mapper";

export const getUserService = async (query: Query) => {
  const { page = "1", perPage = "10" } = query;
  const [user, totalData] = await Promise.all([
    userRepository.getUsers(query),
    userRepository.getUsersCount(query),
  ]);
  const meta = Meta(Number(page), Number(perPage), totalData);
  const data = getUsersDTOMapper(user);
  return { data, meta };
};
